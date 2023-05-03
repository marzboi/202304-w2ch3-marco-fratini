import connect4 from "./connect4.js";

describe("Given the function generateBoardLogic", () => {
  describe("When given the values of 2 and 1", () => {
    test("Then it should return a board with 2 rows and 1 column", () => {
      const rows = 2;
      const columns = 1;

      const expectedTable = [
        [{ matched: false, player: "", rowLocation: 1, colLocation: 1 }],
        [{ matched: false, player: "", rowLocation: 2, colLocation: 1 }],
      ];
      const returnedTable = connect4.generateBoardLogic(rows, columns);

      expect(returnedTable).toStrictEqual(expectedTable);
    });
  });

  describe("When given the values of 1 and 1", () => {
    test("Then it should return a board with 1 row and 1 column", () => {
      const rows = 1;
      const columns = 1;

      const expectedTable = [
        [{ matched: false, player: "", rowLocation: 1, colLocation: 1 }],
      ];
      const returnedTable = connect4.generateBoardLogic(rows, columns);

      expect(returnedTable).toStrictEqual(expectedTable);
    });
  });
});
