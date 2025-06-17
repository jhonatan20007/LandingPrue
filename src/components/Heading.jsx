import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center ${className}`}
    >
      {tag && <TagLine className="mb-4 text-center text-n-1">{tag}</TagLine>}
      {title && (
        <h2 className="text-center w-full flex justify-center">{title}</h2>
      )}
      {text && <p className="body-2 mt-4 text-n-1/80 text-center">{text}</p>}
    </div>
  );
};

export default Heading;
