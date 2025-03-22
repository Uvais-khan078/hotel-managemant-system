const API_URL = "http://127.0.0.1:5000";  // Ensure this is correct

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {   // Corrected URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Login API Error:", error);
        return { error: "Failed to connect to server" };
    }
}
