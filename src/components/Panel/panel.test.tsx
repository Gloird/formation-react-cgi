import { render } from "@testing-library/react";
import Panel from "./panel";

describe("Panel", () => {
  test("Vérification de la construction du Panel", () => {
    const renderPanel = render(<Panel titre="Titre du panel" />);

    //Vérifie que un div existe
    expect(renderPanel.container.getElementsByTagName("div")).toHaveLength(1);
    //Vérifie qu'il existe bien un enfant dans le div
    expect(
      renderPanel.container.getElementsByTagName("div").item(0)?.children
    ).toHaveLength(1);
    //Vérifie que l'enfant est bien un SPAN
    expect(
      renderPanel.container
        .getElementsByTagName("div")
        .item(0)
        ?.children.item(0)?.tagName
    ).toBe("SPAN");
  });

  test("Affichage du titre", () => {
    const renderPanel = render(<Panel titre="Titre du panel" />);

    //Titre du panel est il dans le dom
    expect(renderPanel.getByText("Titre du panel")).toBeInTheDocument();
  });
  test("Affichage des children", () => {
    const renderPanel = render(
      <Panel titre="Titre du panel">
        <span data-testid="span1">Span1</span>
        <span data-testid="span2">Span2</span>
      </Panel>
    );
    //Titre du panel est il dans le dom
    expect(renderPanel.getByText("Titre du panel")).toBeInTheDocument();
    //Vérification que le span 1 est afficher (utilisation du testId car les span et div n'ont pas de rôle voir : https://www.w3.org/TR/html-aria/ )
    expect(renderPanel.getByTestId("span1")).toBeInTheDocument();
    //Vérification que le span 2 est afficher (utilisation du testId car les span et div n'ont pas de rôle voir : https://www.w3.org/TR/html-aria/ )
    expect(renderPanel.getByTestId("span2")).toBeInTheDocument();
  });

  test("Snapshot Panel", () => {
    const renderButton = render(<Panel titre="Titre du panel" />);

    //Permet de s'assurer que l'UI ne change pas.
    expect(renderButton.baseElement).toMatchSnapshot();
  });
});
