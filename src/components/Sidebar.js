import React from "react";
import { NavLink } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Sidebar.css";

const SidebarMenu = () => {
  const styleActive = ({ isActive }) => ({
    backgroundColor: isActive ? "rgb(0, 114, 188)" : "",
    borderRadius: "10px",
  });

  return (
    <div
      className="div-sidebar"
      style={{
        width: "310px",
      }}
    >
      <Sidebar
        width="310px"
        rootStyles={{
          borderRadius: "10px",
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0 || level === 1 || level === 2) {
                return {
                  backgroundColor: active ? "rgb(0, 114, 188)" : undefined,
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "rgb(0, 114, 188)",
                    color: "white",
                  },
                };
              }
            },
          }}
        >
          <MenuItem component={<NavLink to="/circuit" style={styleActive} />}>
            Схема
          </MenuItem>
          <SubMenu label="Теория">
            <MenuItem
              component={
                <NavLink to="/lectures/quantum_bit" style={styleActive} />
              }
            >
              Квантовый бит
            </MenuItem>
            <MenuItem
              component={
                <NavLink to="/lectures/quantum_system" style={styleActive} />
              }
            >
              Квантовая система
            </MenuItem>
            <MenuItem
              component={
                <NavLink
                  to="/lectures/measurement_in_quantum_system"
                  style={styleActive}
                />
              }
            >
              Измерение квантовой системы
            </MenuItem>
            <SubMenu label="Квантовые гейты">
              <MenuItem
                component={
                  <NavLink to="/lectures/hadamard_gate" style={styleActive} />
                }
              >
                Гейт Адамара
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/X_gate" style={styleActive} />
                }
              >
                Оператор NOT (Гейт X)
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/Z_gate" style={styleActive} />
                }
              >
                Гейт Z
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/Y_gate" style={styleActive} />
                }
              >
                Гейт Y
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/S_gate" style={styleActive} />
                }
              >
                Гейт S
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/T_gate" style={styleActive} />
                }
              >
                Гейт T
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/RxRyRz_gate" style={styleActive} />
                }
              >
                Гейты поворота Rx, Ry, Rz
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/U_gates" style={styleActive} />
                }
              >
                <div>Произвольные однокубитные</div>
                <div>унитарные гейты U</div>
              </MenuItem>
              <MenuItem
                component={
                  <NavLink to="/lectures/table_gates" style={styleActive} />
                }
              >
                <div>Таблица однокубитных</div>
                <div>гейтов</div>
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/controlled_gates"
                    style={styleActive}
                  />
                }
              >
                Контролируемые гейты
              </MenuItem>
            </SubMenu>
            <SubMenu label="Квантовые алгоритмы">
              <MenuItem
                component={
                  <NavLink to="/lectures/Bell_state" style={styleActive} />
                }
              >
                {" "}
                <div>Перепутанные состояния</div>
                <div> двух кубитов. Базис Белла</div>
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/superdense_coding"
                    style={styleActive}
                  />
                }
              >
                {" "}
                Сверхплотное кодирование
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/quantum_teleportation"
                    style={styleActive}
                  />
                }
              >
                {" "}
                Квантовая телепортация
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/Deutsch–Jozsa_algorithm"
                    style={styleActive}
                  />
                }
              >
                {" "}
                <div>Алгоритм Дойча.</div>
                <div>Задача Дойча-Джозы</div>
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/Grover's_algorithm"
                    style={styleActive}
                  />
                }
              >
                {" "}
                Алгоритм Гровера
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/quantum_fourier_transform"
                    style={styleActive}
                  />
                }
              >
                {" "}
                <div>Квантовое</div>
                <div>преобразование Фурье</div>
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/lectures/Shor's_algorithm"
                    style={styleActive}
                  />
                }
              >
                {" "}
                Алгоритм Шора
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="Практика">
            <MenuItem> Практика 1</MenuItem>
            <MenuItem> Практика 2</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
