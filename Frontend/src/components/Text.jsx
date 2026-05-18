function Text({ text, style }) {
  return (
    <div className={`text-sm md:text-base lg:text-lg  ${style}`}>{text}</div>
  );
}

export default Text;
