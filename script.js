const dataForTable = [
  {
    company: "Alfreds <b>Futterkiste</b>",
    chef: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    chef: "Francisco Chang",
    country: "Mexico",
  },
  {
    company: "Ernst Handel",
    chef: "Roland Mendel",
    country: "Austria",
  },
  {
    company: "Island Trading",
    chef: "Helen Bennett",
    privet: "Hellooooo",
    country: "UK",
  },
  {
    company: "Laughing Bacchus Winecellars",
    chef: "Yoshi Tannamuri",
    country: "Canada",
  },
];

let gridView = new BuildTable();

const data = {
  header: "Hello",
  element: ".forTable",
  headerClass: ["header", "site-header"],
  attribute: {
    company: {
      label: "Компания",
      src: "html",
    },
    chef: {
      label: "Директор",
    },
    privet: {
      label: "Privet !!!",
    },
    country: {
      label: "Страна",
      value: (data) => {
        if (data["country"] === "Germany") {
          return data["country"] + " map";
        }
        return data["country"];
      },
    },
  },
  data: dataForTable,
};

const data2 = {
  header: "Hello",
  element: "div",
  headerClass: ["header", "site-header"],
  attribute: {
    company: {
      label: "Компания",
      src: "html",
    },
    chef: {
      label: "Директор",
    },
    privet: {
      label: "Privet !!!",
    },
    country: {
      label: "Страна",
      value: (data) => {
        if (data["country"] === "Germany") {
          return data["country"] + " !!!!!!!!";
        }
        return data["country"];
      },
    },
  },
  data: dataForTable,
};

gridView.render(data);
gridView.render(data2);
console.log(gridView);
