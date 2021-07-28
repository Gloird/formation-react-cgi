import { fireEvent, render } from "@testing-library/react";
import Counter from "./counter";

describe("Counter", () => {
  test("fonctionnement", () => {
    const renderCounter = render(<Counter />);

    //les 2 boutons sont dans le bom
    expect(renderCounter.getAllByRole("button")).toHaveLength(2);
    const boutonPlus = renderCounter.getAllByRole("button")[0];
    const boutonMoins = renderCounter.getAllByRole("button")[1];
    //Que le bouton 1 a contien +1
    expect(boutonPlus).toHaveTextContent("+1");
    //Que le bouton 2 a contien -1
    expect(boutonMoins).toHaveTextContent("-1");
    //Que il y a bien 0 de présent dans le dom
    expect(renderCounter.getByText("0")).toBeInTheDocument();

    const compteur = renderCounter.getByText("0");

    //Test du bon fonctionnement
    //Clique sur le bouton +1
    fireEvent.click(boutonPlus);
    //Présence du 1 dans le dom
    expect(compteur).toHaveTextContent("1");

    //Clique sur le bouton -1
    fireEvent.click(boutonMoins);
    //Présence du 0 dans le dom
    expect(compteur).toHaveTextContent("0");

    //Clique sur le bouton -1
    fireEvent.click(boutonMoins);
    //Présence du 1 dans le dom
    expect(compteur).toHaveTextContent("-1");

    //Clique sur le bouton +1
    fireEvent.click(boutonPlus);
    //Présence du 0 dans le dom
    expect(compteur).toHaveTextContent("0");
  });

  /**
   * Snapshot du composant pour valider les évolutions.
   */
  test("snapshot pour le composant Counter", () => {
    const renderCounter = render(<Counter />);

    expect(renderCounter.baseElement).toMatchSnapshot();
  });
});
