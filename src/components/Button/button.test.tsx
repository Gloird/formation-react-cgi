import { render } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("Texte est afficher", () => {
    const renderButton = render(<Button texte="Mon texte" />);
    //Bouton est il dans le dom
    expect(renderButton.getByRole("button")).toBeInTheDocument();
    //Bouton contien bien le texte «Mon texte»
    expect(renderButton.getByRole("button")).toHaveTextContent("Mon texte");
    //Bouton contien bien le style «border: "1px solid"»
    expect(renderButton.getByRole("button")).toHaveStyle({
      border: "1px solid",
    });
  });

  test("Couleur du texte", () => {
    const renderButton = render(
      <Button texte="Mon texte" couleurTexte="#3798B8" />
    );
    //Bouton est il dans le dom
    expect(renderButton.getByRole("button")).toBeInTheDocument();
    //Bouton contien bien le texte «Mon texte»
    expect(renderButton.getByRole("button")).toHaveTextContent("Mon texte");
    //Bouton contien bien le style «border: "1px solid",color: "#3798B8"»
    expect(renderButton.getByRole("button")).toHaveStyle({
      border: "1px solid",
      color: "#3798B8",
    });
  });

  test("Couleur de fond", () => {
    const renderButton = render(
      <Button texte="Mon texte" couleurFond="#5CB837" />
    );
    //Bouton est il dans le dom
    expect(renderButton.getByRole("button")).toBeInTheDocument();
    //Bouton contien bien le texte «Mon texte»
    expect(renderButton.getByRole("button")).toHaveTextContent("Mon texte");
    //Bouton contien bien le style «border: "1px solid",backgroundColor: "#5CB837"»
    expect(renderButton.getByRole("button")).toHaveStyle({
      border: "1px solid",
      backgroundColor: "#5CB837",
    });
  });

  test("Couleur de la bordure", () => {
    const renderButton = render(
      <Button texte="Mon texte" couleurBordure="#B8A637" />
    );
    //Bouton est il dans le dom
    expect(renderButton.getByRole("button")).toBeInTheDocument();
    //Bouton contien bien le texte «Mon texte»
    expect(renderButton.getByRole("button")).toHaveTextContent("Mon texte");
    //Bouton contien bien le style «border: "1px solid",backgroundColor: "#5CB837"»
    expect(renderButton.getByRole("button")).toHaveStyle({
      border: "1px solid",
      borderColor: "#B8A637",
    });
  });

  test("Snapshot Button", () => {
    const renderButton = render(<Button texte="Mon texte" />);

    //Permet de s'assurer que l'UI ne change pas.
    expect(renderButton.baseElement).toMatchSnapshot();
  });
});
