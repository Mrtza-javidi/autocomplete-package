import { autocomplete } from "../index";

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
    result && expect(result[0]).toBe("morteza");
  });

  it('should return the first word or phrase for prefix "h"', () => {
    const result = autocomplete("h", words);
    result && expect(result[0]).toBe("haniyeh");
  });
  it("should return null if no word starts with the given prefix", () => {
    const result = autocomplete("z", words);
    expect(result).toBeNull();
  });
});
