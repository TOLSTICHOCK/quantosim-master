import React from "react";
import "../theory/lecture.css";

const Lecture9 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Гейт T</h3>
      <p>
        Рассмотрим еще один комплексный логический{" "}
        <i>
          <b>гейт T</b>
        </i>
        , который часто обозначается как <i>π/4</i>.{" "}
        <i>
          <b>Гейт T</b>
        </i>{" "}
        задается матрицей:
      </p>
      <p align="center">
        <p className="lecture9-formula-1"></p>
      </p>
      <p>
        Название{" "}
        <i>
          <b>гейта T</b>
        </i>{" "}
        определяется историческими возможностью представления матрицы этого
        гейта с точностью до общего фазового множителя в виде:
      </p>
      <p align="center">
        <p className="lecture9-formula-2"></p>
      </p>
      <p>
        Покажем действия{" "}
        <i>
          <b>гейта T</b>
        </i>{" "}
        на кубит в различных состояниях.
      </p>
      <p align="center">
        <p className="lecture9-formula-3"></p>
      </p>
      <p>
        Покажем действие{" "}
        <i>
          <b>гейта T</b>
        </i>{" "}
        на сфере Блоха (рис. 1).
      </p>
      <p align="center">
        <p className="lecture9-formula-4"></p>
      </p>
      <p align="center">
        Рис. 1. Действие{" "}
        <i>
          <b>гейта T</b>
        </i>
      </p>
      <p>
        Таким образом,{" "}
        <i>
          <b>гейт T</b>
        </i>{" "}
        не изменяет коэффициент при базисном векторе 0 и меняет фазу
        коэффициента при базисном векторе 1.
      </p>
    </div>
  );
};

export default Lecture9;
