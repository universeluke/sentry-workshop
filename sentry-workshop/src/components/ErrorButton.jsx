function ErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error("This is your second error!");
      }}
    >
      Break the internet
    </button>
  );
}

export default ErrorButton;
