export const Gallrender = () => {
  const iframePart = () => {
    return {
      __html:
        '<iframe src="http://127.0.0.1:5500/src/pages/gallery/exhibition.html" width="1600px" height="100%"></iframe>',
    };
  };

  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={iframePart()}
    />
  );
};
