import autocomplete from "../index";

describe("Autocomplete", () => {
  beforeEach(() => {
    autocomplete
      .addPhrase("morteza", 1.5)
      .addPhrase("mohammad", 1.4)
      .addPhrase("moghimi", 3)
      .addPhrase("mohsen")
      .addPhrase("haleh", 0.5)
      .addPhrase("hossein", 1)
      .addPhrase("haniyeh", 2)
      .addPhrase("hamid")
      .addPhrase("laleh")
      .addPhrase("ladan")
      .addPhrase("laminor")
      .addPhrase("farhad", 5)
      .addPhrase("farzaneh", 5)
      .addPhrase("faezeh", 5);
  });

  it("should return the phrase with the highest priority for a given prefix", () => {
    const result = autocomplete.suggest("mo");
    expect(result![0]).toEqual("mohammad");
  });

  it("should handle both phrases with and without priority", () => {
    const result = autocomplete.suggest("ha");
    expect(result![0]).toEqual("haleh");
  });

  it("should return the first phrase between a couple of them without any priority", () => {
    const result = autocomplete.suggest("l");
    expect(result![0]).toEqual("laleh");
  });

  it("should return the first phrase between a couple of them with same priorities", () => {
    const result = autocomplete.suggest("fa");
    expect(result![0]).toEqual("farhad");
  });

  it("should return null if no word starts with the given prefix", () => {
    const result = autocomplete.suggest("z");
    expect(result).toBeNull();
  });
});
