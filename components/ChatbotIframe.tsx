import React from "react";

type ChatbotIframeProps = {
  src: string;
};

const ChatbotIframe: React.FC<ChatbotIframeProps> = ({ src }) => (
  <div className="max-w-4xl mx-auto my-8 p-4 bg-white rounded-lg shadow-lg h-[80vh]">
    <iframe
      src={src}
      className="w-full h-full rounded"
      frameBorder="0"
      allow="microphone; camera"
    />
  </div>
);

export default ChatbotIframe;
