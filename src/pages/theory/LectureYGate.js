import React from "react";
import "../theory/lecture.css";

const Lecture7 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Гейт Y</h3>
      <p>
        <i>
          <b>Гейт Y</b>
        </i>{" "}
        задается матрицей:
      </p>
      <p align="center">
        <p className="lecture7-formula-1"></p>
      </p>
      <p>
        В отличие от предыдущих рассмотренных нами элементов,{" "}
        <i>
          <b>гейт Y</b>
        </i>{" "}
        является комплексным. Покажем действия{" "}
        <i>
          <b>гейта Y</b>
        </i>{" "}
        на кубит в различных состояниях.
      </p>
      <p align="center">
        <p className="lecture7-formula-2"></p>
      </p>
      <p>
        На сфере Блоха действие{" "}
        <i>
          <b>гейта Y</b>
        </i>{" "}
        соответствует повороту вектора вокруг оси <i>Y</i> на угол <i>π</i>{" "}
        (рис. 1).
      </p>
      <p align="center">
        <p className="lecture7-formula-3"></p>
      </p>
      <p align="center">
        Рис. 1. Действие{" "}
        <i>
          <b>гейта Y</b>
        </i>
      </p>
      <p>
        Отметим следующее свойства{" "}
        <i>
          <b>гейта Y</b>
        </i>
        :
      </p>
      <p align="center">
        <i>HYH = -Y.</i>
      </p>
      <p>Приведем пример показывающие данное свойство.</p>
      <p>
        <b>Пример 2.6.</b> Для кубита в состоянии |&#936;&#9002; = α|0&#9002; +
        β|1&#9002; применим операции <i>HYH</i>.
      </p>
      <p align="center">
        <p className="lecture7-formula-4"></p>
      </p>
      <p>
        Как было показано ранее <i>Y</i>|&#936;&#9002; = -<i>i</i>β|0&#9002; +
        <i>i</i>α|1&#9002;, а, следовательно, можно заметить, что{" "}
        <i>HYH = -Y</i>.
      </p>
    </div>
  );
};

export default Lecture7;
