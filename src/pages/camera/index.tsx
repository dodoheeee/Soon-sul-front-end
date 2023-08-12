import { useEffect, useRef, useState } from "react";
import CameraBottom from "./components/bottom";
import CameraHeader from "./components/header";
import CameraFrame from "./components/frame";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { SHOT_STATUS } from "@/constants/biz";
import * as tmImage from "@teachablemachine/image";
import { CustomMobileNet } from "@teachablemachine/image";
import { useRouter } from "next/router";
import { useGetScan } from "@/biz/liquor";

const predictUrl = "https://teachablemachine.withgoogle.com/models/QvUS73iKU/";

const CameraPage: React.FC = () => {
  const [nameDetail, setNameDetail] = useState<string>("");
  useGetScan(nameDetail, (id: string) => router.push("/detail?id=" + id));
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState("READY");
  const [capturedImage, setCapturedImage] = useState("");
  const { height } = useWindowDimensions();
  const router = useRouter();
  let model: CustomMobileNet, maxPredictions: number;

  const init = async () => {
    const modelURL = predictUrl + "model.json";
    const metadataURL = predictUrl + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
  };

  async function predict(blob: Blob) {
    // create a new image element
    const image = new Image();
    image.src = URL.createObjectURL(blob);

    // wait for the image to load
    await new Promise((resolve) => {
      image.onload = resolve;
    });

    // predict can take in an image, video, or canvas html element
    const prediction = await model.predict(image, false);
    let highestProbabilityIndex = 0;
    let highestProbability = prediction[0].probability.toFixed(2);

    for (let i = 1; i < maxPredictions; i++) {
      const currentProbability = prediction[i].probability.toFixed(2);
      if (currentProbability > highestProbability) {
        highestProbabilityIndex = i;
        highestProbability = currentProbability;
      }
    }

    // Output the prediction with the highest probability
    const bestClassPrediction = prediction[highestProbabilityIndex].className;
    setNameDetail(bestClassPrediction);
  }

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas?.setAttribute("width", `${video?.videoWidth}`);
    canvas?.setAttribute("height", `${video?.videoHeight}`);

    if (video && canvas) {
      const context = canvas.getContext("2d");
      if (!context) return;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageSrc = canvas.toDataURL("image/png");
      setCapturedImage(imageSrc);
      canvas.toBlob(async function(blob) {
        await init();
        // pass the blob to the predict function
        blob && (await predict(blob));
        setStatus(SHOT_STATUS.DONE);
      });
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
        // Handle error or provide fallback behavior
      });
  }, [status, height]);

  return (
    <div className="relative">
      <CameraHeader />
      {capturedImage === "" ? (
        <>
          <CameraFrame />
          <video
            ref={videoRef}
            className="object-contain bg-black"
            style={{ height: (height ? height : 0) - 88 }}
          />
        </>
      ) : (
        <></>
      )}
      {capturedImage && (
        <div
          className="flex items-center "
          style={{ height: (height ? height : 0) - 88 }}
        >
          <img src={capturedImage} alt="Captured" height={700} width={"100%"} />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="object-cover"
        style={{
          display: "none",
        }}
      />
      <CameraBottom
        status={status}
        setStatus={setStatus}
        capturedImage={captureImage}
      />
    </div>
  );
};

export default CameraPage;
