export const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
];

export const messages = {
  title: {
    valueMissing: "El campo de título no puede estar vacío.",
    tooShort: "El título debe contener al menos 3 caracteres.",
  },
  category: {
    valueMissing: "Por favor, seleccione un equipo.",
  },
  photo: {
    valueMissing: "El campo de foto no puede estar vacío.",
    typeMismatch: "Por favor, ingrese una URL válida para la imagen.",
    tooShort: "La URL de la foto debe contener al menos 3 caracteres.",
  },
  link: {
    valueMissing: "El campo de video no puede estar vacío.",
    typeMismatch: "Por favor, ingrese una URL válida.",
    tooShort: "La URL del video debe contener al menos 3 caracteres.",
  },
  description: {
    valueMissing: "El campo de descripción no puede estar vacío.",
    tooShort: "La descripción debe contener al menos 10 caracteres.",
  },
};
