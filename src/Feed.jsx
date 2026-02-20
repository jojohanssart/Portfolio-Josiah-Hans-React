import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/sections/Footer";

export const Feed = () => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />

            <main style={{ paddingTop: "150px", paddingBottom: "50px", textAlign: "center" }}>
                <h1>Feed Page</h1>
                <p>This feed page!</p>
            </main>

            <Footer />
        </div>
    );
};