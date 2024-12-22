import StyledLink from "./styledLink";

export default function Footer() {
    return (
        <footer className="border border-1 border-stone-200 bg-slate-100 rounded-xl p-4 shadow-lg mt-[60px] mb-5 w-fit">
            <p>
                Copyright Charles Nicholson 2024. Open source on{" "}
                <StyledLink
                    href="www.github.com/crnicholson/problem-dating-app"
                >
                    GitHub
                </StyledLink>{" "}
                and hosted on Vercel. Licensed under GPL v3.
            </p>
        </footer>
    );
}