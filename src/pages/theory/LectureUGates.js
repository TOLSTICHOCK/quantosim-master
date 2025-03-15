import React from "react";
import "../theory/lecture.css";

const Lecture11 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Произвольные однокубитные унитарные гейты U</h3>
      <p>
        Произвольный однокубитовый унитарный оператор может быть записан в виде:
      </p>
      <div align="center">
        <p className="lecture11-formula-1"></p>
      </div>
      <p>
        где <i>R</i>
        <sub>
          <i>n</i>
        </sub>
        (<i>&theta;</i>)– оператор поворота на угол вокруг оси, определенной
        единичным вектором <i>n</i>, <i>&alpha;</i> и <i>&theta;</i> –
        действительные числа.
      </p>
      <p>
        <i>
          <b>Гейт U1</b>
        </i>{" "}
        осуществляет вращение одного кубита вокруг оси <i>Z</i>. В матричном
        виде данный гейт можно записать как:
      </p>
      <div align="center">
        <p className="lecture11-formula-2"></p>
      </div>
      <p>
        В зависимости от значения угла <i>&lambda;</i> данный гейт является
        эквивалентом других гейтов:
      </p>
      <div align="center">
        <p className="lecture11-formula-3"></p>
      </div>
      <p>
        <i>
          <b>Гейт U2 </b>
        </i>{" "}
        осуществляет вращение одного кубита вокруг <i>X-Y</i> осей. Согласно
        теореме X–Y разложения для однокубитового гейта данный оператор
        определяется как:
      </p>
      <div align="center">
        <p className="lecture11-formula-4"></p>
      </div>
      <p>В матричном виде данный гейт можно записать как:</p>
      <div align="center">
        <p className="lecture11-formula-5"></p>
      </div>
      <p>
        Можно заметить, что <i>U</i>2(0,<i>&pi;</i>) = <i>H</i>.
      </p>
      <p>
        <i>
          <b>Гейт U3</b>
        </i>{" "}
        – это универсальный однокубитный поворотный затвор с тремя углами
        Эйлера. Данный гейт определяется как:
      </p>
      <div align="center">
        <p className="lecture11-formula-6"></p>
      </div>
      <p>Можно заметить, что </p>
      <div align="center">
        <p className="lecture11-formula-7"></p>
      </div>
      <div align="center">
        <p className="lecture11-formula-8"></p>
      </div>
    </div>
  );
};

export default Lecture11;
