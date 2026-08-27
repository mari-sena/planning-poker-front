import { cn } from "../utils";

describe("cn", () => {
    it("joins continual class names", () => {
        expect(cn("base", false && "hidden", undefined, "active")).toBe("base active");
    });

    it("keeps the last conflicting Tailwind utility", () => {
        expect(cn("px-2 py-2", "px-4")).toBe("py-2 px-4");
    });
});
