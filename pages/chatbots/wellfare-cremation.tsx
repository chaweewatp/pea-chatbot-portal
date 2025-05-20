import ChatbotIframe from "@/components/ChatbotIframe";
import { useRouter } from "next/router";

export default function WellfareCremationChatbot() {
  const router = useRouter();
  const iframeSrc =
    "https://copilotstudio.microsoft.com/environments/Default-a2339f6d-bf4a-44db-88ec-cb8f27da4abb/bots/cr62c_fJmRVTpJbFEyVsro40Fp7/webchat?__version__=2";

  return (
    <div className="p-4">
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:underline mb-4"
      >
        ← กลับ
      </button>
      <ChatbotIframe src={iframeSrc} />
    </div>
  );
}
