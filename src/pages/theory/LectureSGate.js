import React from "react";
import "../theory/lecture.css";

const Lecture8 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Гейт S</h3>
      <p>
        <i>
          <b>Гейт S</b>
        </i>{" "}
        задается матрицей:
      </p>
      <p align="center">
        <p className="lecture8-formula-1"></p>
      </p>
      <p>
        Покажем действия{" "}
        <i>
          <b>гейта S</b>
        </i>{" "}
        на кубит в различных состояниях.
      </p>
      <p align="center">
        <p className="lecture8-formula-2"></p>
      </p>
      <p>
        Покажем действие{" "}
        <i>
          <b>гейта S</b>
        </i>{" "}
        на сфере Блоха (рис.1).
      </p>
      <p align="center">
        <p className="lecture8-formula-3"></p>
      </p>
      <p align="center">
        Рис. 1. Действие{" "}
        <i>
          <b>гейта S</b>
        </i>
      </p>
    </div>
  );
};

export default Lecture8;
