const chatApp = [
  {
    body: `<call-us-selector phonesystem-url="https://1287.3cx.cloud" party="na"></call-us-selector>
<script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
  id="tcx-callus-js"></script> ;`,
  },
];

const LiveChat = () => {
  return (
    <div>
      {chatApp.map((chat, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: chat.body }}
        ></div>
      ))}
    </div>
  );
};

export default LiveChat;
