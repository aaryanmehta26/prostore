"use server";

import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { success: false, message: "Invalid credentials" };
  }
}

// Sign user out
export async function signUserOut() {
  await signOut(); // we are using next auth, so next js will handle all this behind the scene, like clearing cookies and asll
}
