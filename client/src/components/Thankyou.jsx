import { BiCopy } from "react-icons/bi"

export default function ThankYou({id}) {

    const handleCopyToClipboard = async () => {
        try {
          const textToCopy = id;
          await navigator.clipboard.writeText(textToCopy);
        } catch (error) {
          console.error("Failed to copy text to clipboard:", error);
        }
      };
    return (
        <main>
          <section className="text-lg">
        <BiCopy onClick={handleCopyToClipboard} />
        <div>{id}</div>
      </section>
            <h1>Thank You</h1>
            <section>
                <h1>Use the admission number you were given earlier to login...</h1>
            </section>
        </main>
    )
}