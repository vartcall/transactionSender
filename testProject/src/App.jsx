import {useRef} from "react";
import {ethers, parseEther, BrowserProvider} from "ethers";

export default function App() {

    const toRef = useRef(null);
    const amountRef = useRef(null);


    const handleSendEther = async (e) => {
        e.preventDefault();

        try {
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to: toRef.current?.value,
                value: parseEther(amountRef.current?.value || "0"),
            });
            console.log(tx);
            const response = await tx.wait();
            console.log(response);
        } catch(error){
            console.error(error);

        }
    };

    return (
        <>
            <h2>Send Ethereum</h2>
            <form onSubmit={handleSendEther} className="form-container">
                <label className="form-label">
                    User Address
                    <input
                        ref={toRef}
                        type="text"
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Sum in $ETH
                    <input
                        type="text"
                        ref={amountRef}
                        className="form-input"
                    />
                </label>
                <button type="submit" className="form-button">Send</button>
            </form>
        </>
    );

}






