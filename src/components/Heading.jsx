import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 text-center  md:text-center text-n-1">{tag}</TagLine>}
      {title && (
        <h2 className="text-center justify-center md:text-left md:justify-start">
          {title}
        </h2>
      )}

      {text && <p className="body-2 mt-4  text-n-1/80">{text}</p>}
    </div>
  );
};

export default Heading;
