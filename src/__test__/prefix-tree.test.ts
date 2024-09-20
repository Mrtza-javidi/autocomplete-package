import { autocomplete, addPhrase } from "../index";

describe("Autocomplete", () => {
  const words = [
    "haniyeh",
    "sadegh",
    "hossein",
    "morteza",
    "mohammad",
    "hamid",
    "moghimi",
    "mohsen",
    "morteza",
    "mohammad",
    "moghimi",
  ];
  it('should return the first word or phrase for prefix "mo"', () => {
    const result = autocomplete("mo", words);
    expect(result![0]).toBe("morteza");
  });

  it('should return the first word or phrase for prefix "h"', () => {
    const result = autocomplete("h", words);
    expect(result![0]).toBe("haniyeh");
  });

  it("should return null if no word starts with the given prefix", () => {
    const result = autocomplete("z", words);
    expect(result).toBeNull();
  });

  it("should return the phrase with the highest priority for a given prefix", () => {
    addPhrase("morteza", 2);
    addPhrase("mohammad", 1.2);
    addPhrase("morid", 2);

    const result = autocomplete("mo");
    expect(result![0]).toEqual("mohammad");
  });

  it("should handle phrases with the same prefix but different priorities", () => {
    addPhrase("mohammad", 1.2);
    addPhrase("morteza", 1);
    addPhrase("morid", 2);

    const result = autocomplete("mo");
    expect(result![0]).toEqual("morteza");
  });

  it("should handle both phrases with and without priority", () => {
    addPhrase("morteza", 1);
    addPhrase("mohammad", 1.2);
    addPhrase("morid", 2);
    addPhrase("hossein");
    addPhrase("haniyeh");

    const result = autocomplete("mo");
    expect(result![0]).toEqual("morteza");
  });

  it("should return null if no word starts with the given prefix", () => {
    addPhrase("haniyeh");
    addPhrase("sadegh");

    const result = autocomplete("z");
    expect(result).toBeNull();
  });
});
