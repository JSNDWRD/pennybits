import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import preview from "@/public/preview.png";
import previewMobile from "@/public/preview-mobile.jpg";

function LandingPage() {
  return (
    <div className="flex min-h-[90dvh] flex-col justify-center gap-4 bg-base-100 p-4 backdrop-blur-sm">
      <div className="mx-auto flex h-screen flex-col items-center justify-center gap-4 lg:w-2/3">
        <h1 className="text-center text-7xl font-bold">
          Manage Your <span className="text-primary">Finances</span> Now.
        </h1>
        <p className="w-5/6 text-center">
          Our Finance Tracker App empowers you to manage your budget
          effortlessly and track your spending in real-time. Start making
          informed financial decisions with ease and confidence.
        </p>
        <SignInButton>
          <button className="group btn btn-primary text-base-100">
            Get Started Now{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-4 stroke-[2.5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </SignInButton>
        <span className="text-center">
          Login with
          <br /> <code>username: user</code>
          <br /> <code>password: user</code>
        </span>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="mockup-browser h-fit border bg-base-300 md:col-span-2">
          <div className="mockup-browser-toolbar">
            <div className="input">https://pennybits.vercel.app</div>
          </div>
          <div className="flex justify-center bg-base-200">
            <Image src={preview} alt="Browser Mockup" />
          </div>
        </div>
        <div className="mockup-phone my-auto h-fit max-md:hidden">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Image src={previewMobile} alt="Mobile Mockup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
