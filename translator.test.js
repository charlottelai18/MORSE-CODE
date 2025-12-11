import { englishToMorse, morseToEnglish } from "./translator";

describe("englishToMorse", () => {
  it("translates a single word", () => {
    expect(englishToMorse("SOS")).toBe("... --- ...");
  });

  it("translates lowercase and uppercase the same", () => {
    expect(englishToMorse("sos")).toBe("... --- ...");
  });

  it("translates a sentence with a space", () => {
    expect(englishToMorse("HI THERE")).toBe(".... .. / - .... . .-. .");
  });
});

describe("morseToEnglish", () => {
  it("translates Morse to English", () => {
    expect(morseToEnglish("... --- ...")).toBe("SOS");
  });

  it("translates sentence with / back to space", () => {
    expect(morseToEnglish(".... .. / - .... . .-. .")).toBe("HI THERE");
  });
});
