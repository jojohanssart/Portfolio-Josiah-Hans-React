import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/sections/Footer";

export const Feed = () => {
    return (
        <div style={{ backgroundColor: "#F0F0F0", minHeight: "100vh" }}>
            <Navbar />
            
            <main style={{ paddingTop: "150px", paddingBottom: "50px", textAlign: "center" }}>
                <h1>Feed Page</h1>
                <p>This is your new page!</p>
            </main>

            <Footer />
        </div>
    );
};