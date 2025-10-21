import React from "react";
import "../theory/lecture.css";

const Practice1 = () => {
    return (
        <div className="div-lecture">
            <h3 align="center">Лабораторная работа №1</h3>
            <h4 align="center">Основы работы в системе QSIM</h4>
            <h4 align="center">1. Цель работы</h4>
            <p><b>Целью</b> работы является знакомство с системой <i>QSIM</i>.</p>
            <h4 align="center">2.Реализация квантовых схем в системе QSIM</h4>
            <p>Реализация квантовых алгоритмов в лабораторных работах будет осуществляться с использованием системы <i>QSIM</i>, чтобы перейти к работе в системе <i>QSIM</i> нужно перейти по следующей ссылке - <a href="https://qsim.tsu.ru">https://qsim.tsu.ru</a>.</p>
            <p align="center" className="p1_drawing1"></p>
            <p align="center"><i>Рис. 1. Интерфейс главной страницы в системе QSIM</i></p>
            <p>Для разработки квантовой схемы и проведения моделирования ее работы необходимо нажать на кнопку «Открыть Схему» (рис. 1). Окно схемы выглядит следующим образом (рис. 2).</p>
            <p align="center" className="p1_drawing2"></p>
            <p align="center"><i>Рис. 2. Интерфейс раздела «Схема» в системе QSIM</i></p>
            <p>Разработка квантовой схемы осуществляется посредствам встроенного набора гейтов (рис. 3).</p>
            <p align="center" className="p1_drawing3"></p>
            <p align="center"><i>Рис. 3. Набор квантовых гейтов в системе QSIM</i></p>
            <p>На рис. 4 представлено фрагменты области в которой производится сборка квантовой схемы. Система <i>QSIM</i> позволяет увеличивать и уменьшать количество используемых <b><i>кубитов</i></b>. Наращивание количества <b><i>кубитов</i></b> осуществляется нажатием знака «+» (рис. 4), а удаление <b><i>кубитов</i></b> посредством нажатия на знак «-» справа от <b><i>кубитов</i></b> (рис. 4).</p>
            <p align="center" className="p1_drawing4"></p>
            <p align="center"><i>Рис. 4. Область сборки квантовой схемы в системе QSIM</i></p>
            <p>Разработка квантовой схемы осуществляется посредствам перемещения необходимых гейтов в область схемы и подключением их к соответствующим <b><i>кубитам</i></b>. На рис. 5 представлены примеры включения в схему различных гейтов.</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_2"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_3"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>в</i></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_4"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_5"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing5_6"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>г</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>д</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>е</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 5. Примеры подключения гейтов в системе QSIM</i></p>
            <p>При нажатии на установленный в схеме гейт можно внести изменения в его параметры и конфигурацию. Изменение конфигурации необходимо при смене контролируемого и контролирующих <b><i>кубитов</i></b> для контролируемых гейтов, выбор контролируемых <b><i>кубитов</i></b> осуществляется с помощью гейта «точка» (рис. 6).</p>
            <p align="center" className="p1_drawing6"></p>
            <p align="center"><i>Рис. 6. Примеры выбора управляющего кубита в системе QSIM</i></p>
            <p>Для удаления ненужных кубитов нужно перенести их на изображение урны, а для полной очистки схемы нажать на кнопку «очистить» (рис. 7).</p>
            <p align="center" className="p1_drawing7"></p>
            <p align="center"><i>Рис. 7. Инструменты очистки схемы в системе QSIM</i></p>
            <p>Для некоторых гейтов в системе QSIM предусмотрена возможность редактирования их параметров. В частности, можно изменять углы в гейтах поворота <b><i>Rx</i></b>, <b><i>Ry</i></b>, <b><i>Rz</i></b> и гейтах <b><i>U1</i></b>, <b><i>U2</i></b>, <b><i>U3</i></b>. Примеры изменения параметров показаны на рис. 8.</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_2"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_3"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_4"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>в</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>г</i></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_5"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing8_6"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>д</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>е</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 8. Примеры контролируемых гейтов в системе QSIM</i></p>
            <p>При разработке квантовой схемы в системе QSIM можно увидеть  значения вероятностей всех состояний кубитов квантовой системы нажав на кнопку «расчёт предварительно выставив количество экспериментов (рис. 9).</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing9_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing9_2"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing9_3"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing9_4"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>в</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>г</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 9. Демонстрация процесса отображения вероятностей (в,г) в системе QSIM</i></p>
            <p>Выполнение измерений состояний <b><i>кубитов</i></b> в системе QSIM осуществляется с помощью инструмента «Измерение» графическое обозначение которого представлено на рис. 9,а. Система будет выполнять измерение состояния только тех <b><i>кубитов</i></b> к которым подключен данный инструмент.</p>
            <p>При измерении будут перечислены все возможные варианты состояния системы, а в случае если инструмент «Измерение» не подключен к какому-то из <b><i>кубитов</i></b>, то его состояние всегда будет иметь нулевое значение.</p>
            <h4 align="center">3. Программа работы</h4>
            <p>Выполните следующие пункты работы:</p>
            <p>1. В разделе «Схема» создайте схему из двух кубитов: один кубит должен иметь состояние |0⟩, а второй кубит состояние |1⟩. Состояние |1⟩ можно получить с использованием гейта <b><i>X</i></b>. Примените операцию измерения для данных кубитов и выполните симулирование.</p>
            <p>2. В разделе «Схема» создайте схему из одного кубита находящегося в состоянии <img className="p1_formula1"></img>. Примените операцию измерения к данному кубиту. Выполните симуляцию с различным количеством измерений: 1, 2, 8, 32, 64, 128, 512, 1024, 8192. Проанализируйте результаты измерений и сделайте выводы.</p>
            <p>3. В разделе «Схема» создайте схемы, представленные на рис. 10.</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing10_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing10_2"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 10. Квантовые схемы к заданию №3</i></p>
            <p>Выполните симуляцию данных схем с числом измерений – 1024. Проанализируйте результаты симуляции и сделайте выводы.</p>
            <p>4. В разделе «Схема» создайте схемы, представленные на рис. 11. </p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing11_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing11_2"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 11. Квантовые схемы к заданию №5</i></p>
            <p>Выполните симуляцию данных схем с числом измерений – 1024. Проанализируйте результаты симуляции и сделайте выводы.</p>
            <p>5. В разделе «Схема» создайте схемы, представленные на рис. 12.</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_1"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_2"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_3"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>а</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>б</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>в</i></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_4"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_5"></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="p1_drawing12_6"></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>г</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>д пи/5</i></p></div>
                        </th>
                        <th className="table_style">
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p><i>е пи/5</i></p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p align="center"><i>Рис. 12. Квантовые схемы к заданию №6</i></p>
            <p>Выполните симуляцию данных схем с числом измерений – 1024. Проанализируйте результаты симуляции и положение векторов на сфере Блоха. Сделайте выводы.</p>
            <p>6. Оформите отчет по лабораторной работе. Отчет включает в себя скриншоты всех схем и результатов симуляции по программе работы, выводы.</p>
        </div>
    );
};

export default Practice1;