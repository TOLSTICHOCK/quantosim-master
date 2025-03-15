import React from "react";
import "../theory/lecture.css";

const Lecture12 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Таблица однокубитных гейтов</h3>
      <p>
        В таблице представлены графические обозначение однобитовых гейтов и
        результат их воздействия на произвольный кубит |&#936;&#9002; =
        α|0&#9002; + β|1&#9002;.
      </p>
      <table align="center">
        <tbody>
          <tr>
            <th>
              <div style={{ margin: "10px" }}>Название</div>
            </th>
            <th>
              <div style={{ margin: "10px" }}>Графическое обозначение</div>
            </th>
            <th>
              <div style={{ margin: "10px" }}>Матрица</div>
            </th>
            <th>
              <div style={{ margin: "10px" }}>Результат взаимодействия</div>
            </th>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>H</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-1"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-2"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-3"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>X</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-4"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-5"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-6"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>Z</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-7"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-8"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-9"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>Y</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-10"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-11"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-12"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>S</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-13"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-14"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-15"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>T</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-16"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-17"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-18"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>Rx</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-19"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-20"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-21"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>Ry</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-22"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-23"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-24"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>Rz</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-25"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-26"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-27"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>U1</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-28"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-29"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-30"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>U2</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-31"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-32"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-33"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Гейт{" "}
              <i>
                <b>U3</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-34"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-35"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture12-formula-36"></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Используя гейты поворота{" "}
        <i>
          <b>R</b>
        </i>{" "}
        и унитарные гейты{" "}
        <i>
          <b>U</b>
        </i>
        , можно получать произвольные состояния суперпозиции |&#936;&#9002; =
        α|0&#9002; + β|1&#9002;. Приведем примеры получения различных состояний
        суперпозиции кубита.
      </p>
      <p>
        Пример 1: Получим кубит в состоянии суперпозиции{" "}
        <div align="center">
          <p className="lecture12-formula-37"></p>
        </div>
        применив воздействие гейта{" "}
        <i>
          <b>Rx</b>
        </i>{" "}
        к{" "}
        <i>
          <b>кубиту</b>
        </i>
        , который находится в исходном состоянии |0&#9002;
      </p>
      <div align="center">
        <p className="lecture12-formula-38"></p>
      </div>
      <p>
        Таким образом для получения необходимого состояния нужно рассчитать
        правильный угол поворота <i>&theta;</i>. Для этого решим уравнение:
      </p>
      <div align="center">
        <p className="lecture12-formula-39"></p>
      </div>
      <p>
        На рис. 1 представлена квантовая схема, реализующая подобное состояние
        суперпозиции и результат измерений состояния{" "}
        <i>
          <b>кубита</b>
        </i>{" "}
        с использованием системы IBM Quantum Experience.
      </p>
      <div align="center">
        <p className="lecture12-formula-40"></p>
      </div>
      <div className="image">
        {" "}
        <div style={{ width: "30%" }} align="center">
          a
        </div>
        <div style={{ width: "30%" }} align="center">
          б
        </div>
      </div>
      <p align="center">
        Рис. 1. Квантовая схема получения кубита в состоянии суперпозиции (а) и
        результат симуляции (б)
      </p>
      <p>
        Пример 2: Получим кубит в состоянии суперпозиции |&#936;&#9002; =
        0.6|0&#9002; + 0.8|1&#9002;, применив воздействие гейта{" "}
        <i>
          <b>Rx</b>
        </i>{" "}
        к кубиту, который находится в исходном состоянии |0&#9002;. Состояние
        |&#936;&#9002; = 0.6|0&#9002; + 0.8|1&#9002; соответствует тому, что
        данный кубит будет принимать значение |0&#9002; с вероятностью 36% и
        значение |1&#9002; с вероятностью 64%.
      </p>
      <p>Решим уравнение:</p>
      <div align="center">
        <p className="lecture12-formula-42"></p>
      </div>
      <p>
        На рис. 2 представлена квантовая схема, реализующая подобное состояние
        суперпозиции и результат измерений состояния{" "}
        <i>
          <b>кубита</b>
        </i>{" "}
        с использованием системы IBM Quantum Experience.
      </p>
      <div align="center">
        <p className="lecture12-formula-41"></p>
      </div>
      <div className="image">
        {" "}
        <div style={{ width: "30%" }} align="center">
          a
        </div>
        <div style={{ width: "30%" }} align="center">
          б
        </div>
      </div>
      <p align="center">
        Рис. 2. Квантовая схема получения кубита в состоянии суперпозиции
        |&#936;&#9002; = 0.6|0&#9002; + 0.8|1&#9002; (а) и результат симуляции
        (б)
      </p>
    </div>
  );
};

export default Lecture12;
