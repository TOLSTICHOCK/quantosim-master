import React from "react";
import "../theory/lecture.css";

const Lecture20 = () => {
  return (
    <div className="div-lecture">
      <h3 align="center">Контроллирумые гейты</h3>
      <p>
        Для квантовых вычислений как правило требуется больше одного{" "}
        <i>
          <b>кубита</b>
        </i>
        :
      </p>
      <div align="center">
        <p className="lecture20-formula-1"></p>
      </div>
      <p>Например, система двух кубитов описывается как:</p>
      <div align="center">
        <p className="lecture20-formula-2"></p>
      </div>
      <p>
        Простейшим двукубитным контролируемым гейтом является{" "}
        <i>
          <b>гейт CNOT</b>
        </i>
        . Данный гейт имеет два кубита на входе и два кубита на выходе. При этом
        один из кубитов называется контролирующим, а второй – контролируемым.
        Процесс выполнения{" "}
        <i>
          <b>гейта CNOT</b>
        </i>{" "}
        является следующим: если контролирующий кубит находится в состоянии
        |1&#9002;, тогда контролируемый кубит подвергается квантовой операции
        <i>
          <b> NOT</b>
        </i>
        , если контролирующий кубит находится в состоянии |0&#9002;, тогда
        контролируемый кубит остается без изменения. Графическое обозначение
        квантового{" "}
        <i>
          <b>гейта CNOT</b>
        </i>{" "}
        представлено на рис. 1.
      </p>
      <div align="center">
        <p className="lecture20-formula-3"></p>
      </div>
      <p align="center">
        Рис. 1. Графическое обозначение квантового{" "}
        <i>
          <b>гейта CNOT</b>
        </i>
      </p>
      <p>
        Для пары кубитов |<i>&#936;</i>
        <sub>1</sub>&#9002; и |<i>&#936;</i>
        <sub>2</sub>&#9002; в качестве базисных можно выбрать вектора,
        являющиеся произведением базисных векторов отдельных кубитов:
      </p>
      <div align="center">
        <p className="lecture20-formula-4"></p>
      </div>
      <p>В общем случае можно записать:</p>
      <div align="center">
        <p className="lecture20-formula-5"></p>
      </div>
      <p>
        Исходя из этого можно определить матрицу{" "}
        <i>
          <b>гейта CNOT:</b>
        </i>
      </p>
      <div align="center">
        <p className="lecture20-formula-6"></p>
      </div>
      <p>
        В данном случае для состояния |<i>&#936;</i>&#9002; = <i>&alpha;</i>
        |00&#9002; + <i>&beta;</i>|01&#9002; + <i>&gamma;</i>|10&#9002; +{" "}
        <i>&delta;</i>|11&#9002; первый (слева) кубит будет контролирующим, а
        второй кубит контролируемым. При этом действия{" "}
        <i>
          <b>гейта CNOT </b>
        </i>
        будет следующим:
      </p>
      <p align="center">
        <i>CNOT</i>|00&#9002; &#8658; |00&#9002;,
      </p>
      <p align="center">
        <i>CNOT</i>|01&#9002; &#8658; |01&#9002;,
      </p>
      <p align="center">
        <i>CNOT</i>|10&#9002; &#8658; |11&#9002;,
      </p>
      <p align="center">
        <i>CNOT</i>|11&#9002; &#8658; |10&#9002;.
      </p>
      <p>
        Аналогичным образом может быть определен произвольный контролируемый
        унитарный оператор (таблица 1).
      </p>
      <p align="right">Таблица 1. Контролируемые квантовые гейты</p>
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
          </tr>
          <tr>
            <td>
              <i>
                <b>CXgate CNOT</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-7"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-8"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CYgate</b>
              </i>
            </td>
            <td>
              {" "}
              <div align="center">
                <p className="lecture20-formula-9"></p>
              </div>
            </td>
            <td>
              {" "}
              <div align="center">
                <p className="lecture20-formula-10"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CZgate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-11"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-12"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CRxgate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-13"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-14"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CRygate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-15"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-16"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CRzgate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-17"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-18"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CU1gate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-19"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-20"></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <i>
                <b>CU2gate</b>
              </i>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-21"></p>
              </div>
            </td>
            <td>
              <div align="center">
                <p className="lecture20-formula-22"></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Lecture20;
