import React from "react";
import "../theory/practice.css";

const Practice2 = () => {
    return(
        <div className="div-practice">
            <h3 align="center">Лабораторная работа №2</h3>
            <h4 align="center">Однокубитные гейты</h4>
            <h4 align="center">1. Цель работы</h4>
            <p><b>Целью</b> работы является получение навыков применения однокубитных гейтов и реализация различных состояний суперпозиции кубита.</p>
            <h4 align="center">2. Однокубитные гейты в системе QSIM</h4>
            <p>В таблице 1 представлены варианты однокубитных гейтов, которые есть в системе QSIM.</p>
            <p align="right"><i>Таблица 1. Однокубитные гейты в системе QSIM</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Графическое обозначение</div>
                        </th>
                        <th>
                            <div className="test">Название гейта</div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>Вариант настройки</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><img src="img/img_practice2/gateH.png" alt="Не получилось загрузить"></img></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>гейт <i>X</i></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>-</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}} ><p className="gateH"></p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>гейт <i>Y</i></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>-</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}} className="gateH"></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>гейт <i>Z</i></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>-</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p className="gateH"></p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>гейт <i>S</i></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>-</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}} className="gateH"></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>гейт <i>T</i></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}>-</div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <h4 align="center">3. Программа работы</h4>
            <p>Выполните следующие пункты работы:</p>
            <p>1. Получите кубит в состоянии суперпозиции <img className="practice2-formula1"></img>. Выполните симуляцию.</p>
            <p>2. Двумя способами получите кубит в состоянии суперпозиции <img className="practice2-formula2"></img>. Выполните симуляцию.</p>
            <p>3. Получите кубит в состоянии суперпозиции <img className="practice2-formula3"></img>. </p>
            <p>4. Используя однокубитный гейт <i><b>Rx</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula4"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p align="right"><i>Таблица 2. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вариант</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вероятность состояния <p className="state_0"></p></p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вероятность состояния <p className="state_1"></p></p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>1</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>95</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>2</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>90</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>3</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>80</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>4</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>30</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>70</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>40</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>60</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>6</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>55</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>45</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>7</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>60</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>40</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>8</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>70</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>30</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>9</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>80</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>90</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>11</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>95</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>5. Используя однокубитный гейт <i><b>Ry</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula4"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>6. Используя однокубитный гейт <i><b>U3</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula4"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>7. Используя однокубитный гейт <i><b>Rx</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula5"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>8. Используя однокубитный гейт <i><b>Ry</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula5"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>9. Используя однокубитный гейт <i><b>U3</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula6"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>10. Используя однокубитные гейты <i><b>Rx, Ry, U3</b></i> получите кубит в состоянии суперпозиции <img className="practice2-formula7"></img> в соответствии с вариантом, представленном в таблице 2. Выполните симуляцию. Выполните их математическое обоснование результата.</p>
            <p>11. Экспериментально покажите унитарность гейта Адамара. Выполните их математическое обоснование результата.</p>
            <p>12. Используя однокубитный гейт Rx получите кубит в состоянии суперпозиции <img className="practice2-formula4"></img> в соответствии с вариантом, представленном в таблице 2. Далее реализуйте схему, представленную на рис. 1. Выполните симуляцию. Пронаблюдав результаты симуляции выполните их математическое обоснование.</p>
            <p className="practice2-drawing1" align="center"></p>
            <p align="center"><i>Рис. 1. Квантовая схема к заданию №12</i></p>
            <p>13. Используя однокубитный гейт Rx получите кубит в состоянии суперпозиции <img className="practice2-formula4"></img> в соответствии с вариантом, представленном в таблице 2. Далее реализуйте схему, представленную на рис. 2. Выполните симуляцию. Пронаблюдав результаты симуляции выполните их математическое обоснование.</p>
            <p className="practice2-drawing2" align="center"></p>
            <p align="center"><i>Рис. 2. Квантовая схема к заданию №13</i></p>
            <p>14. Реализуйте симуляцию схем, представленных на рис. 3. Проанализируйте результаты, выполните их математическое обоснование и поясните различие.</p>
            <p className="practice2-drawing3" align="center"></p>
            <p align="center"><i>Рис. 3. Квантовые схемы к заданию №14</i></p>
            <p>15. Реализуйте симуляцию схем, представленных на рис. 4. Проанализируйте результаты, выполните их математическое обоснование и поясните различие.</p>
            <p className="practice2-drawing4" align="center"></p>
            <p align="center"><i>Рис. 4. Квантовые схемы к заданию №15</i></p>
            <p>16. Реализуйте трехкубитовую систему, к показано на рис. 5. В данной системы кубиты должны находиться в состояниях суперпозиции согласно варианту в таблице 3. Выполните симуляцию и проанализируйте результаты. </p>
            <p className="practice2-drawing5" align="center"></p>
            <p align="center"><i>Рис. 5. Квантовые схемы к заданию №16</i></p>
            <p align="right"><i>Таблица 2. Варианты заданий</i></p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вариант</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вероятность состояния <p className="state_0"></p> первого кубита</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вероятность состояния <p className="state_0"></p> второго кубита</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>Вероятность состояния <p className="state_0"></p> третьего кубита</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>1</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>2</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>15</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>3</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>35</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>85</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>4</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>30</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>70</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>55</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>40</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>60</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>65</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>6</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>55</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>45</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>45</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>7</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>60</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>40</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>25</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>8</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>70</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>30</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>9</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>80</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>20</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>90</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>10</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>35</p></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>11</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>95</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>5</p></div>
                        </th>
                        <th>
                            <div align="center" style={{margin: "10px", paddingLeft: "30px", paddingRight: "30px"}}><p>80</p></div>
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>17. Оформите отчет по лабораторной работе. Отчет включает в себя скриншоты всех схем и результатов симуляции по программе работы, выводы.</p>
        </div>
    );
};

export default Practice2;