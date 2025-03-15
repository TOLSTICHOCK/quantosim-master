import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Select from "react-select";
import "../circuit/Circuit.css";
import Graph from "../circuit/Graph";
import ErrorMessage from "../circuit/ErrorMessage";
import { useRef } from "react";
import useDoubleClick from "use-double-click";
import InputNumber from "react-input-number";

const MENU = [
  {
    id: Math.random().toString(16).slice(2),
    name: "H",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "X",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Y",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Z",
  },

  {
    id: Math.random().toString(16).slice(2),
    name: "Rx",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Ry",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Rz",
  },
];

const MENU1 = [
  {
    id: Math.random().toString(16).slice(2),
    name: "S",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "T",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "U1",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "U2",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "U3",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "measurment",
  },
];

const Circuit = () => {
  const [items, setItems] = useState({
    [Math.random().toString(16).slice(2)]: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      { init: 0 },
    ],
  });
  const [isModalContolQ, setModalContolQ] = useState(false);
  const [optionsContolQ, setOptionsContolQ] = useState();
  const [selectedContolQ, setSelectedContolQ] = useState([]);

  const [isModalGateU1Angle, setModalGateU1Angle] = useState(false);
  const [selectedGateU1AngleLambda, setSelectedGateU1AngleLambda] = useState(
    []
  );

  const [isModalGateU2Angle, setModalGateU2Angle] = useState(false);
  const [selectedGateU2AnglePhi, setSelectedGateU2AnglePhi] = useState([]);
  const [selectedGateU2AngleLambda, setSelectedGateU2AngleLambda] = useState(
    []
  );

  const [isModalGateU3Angle, setModalGateU3Angle] = useState(false);
  const [selectedGateU3AngleTheta, setSelectedGateU3AngleTheta] = useState([]);
  const [selectedGateU3AngleLambda, setSelectedGateU3AngleLambda] = useState(
    []
  );
  const [selectedGateU3AnglePhi, setSelectedGateU3AnglePhi] = useState([]);

  const [isModalGateRxAngle, setModalGateRxAngle] = useState(false);
  const [selectedGateRxAngle, setSelectedGateRxAngle] = useState([]);

  const [isModalGateRyAngle, setModalGateRyAngle] = useState(false);
  const [selectedGateRyAngle, setSelectedGateRyAngle] = useState([]);

  const [isModalGateRzAngle, setModalGateRzAngle] = useState(false);
  const [selectedGateRzAngle, setSelectedGateRzAngle] = useState([]);

  const [currentGate, setCurrentGate] = useState();
  const [choosedGate, setChoosedGate] = useState({});
  const [choosedTargetQubit, setChoosedTargetQubit] = useState();

  const [graph, setGraph] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [numCline, setNumCline] = useState(1);

  const [measGates, setMeasGates] = useState({});

  const [shots, setShots] = useState("");
  const [dataGraph, setDataGraph] = useState("");

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const copy = (source, destination, droppableSource, droppableDestination) => {
    // console.log("==> dest", destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    let target;
    Object.entries(items).forEach((col, index) => {
      if (col[0] === droppableDestination.droppableId) {
        target = index;
      }
    });

    destClone.splice(droppableDestination.index, 0, {
      ...item,
      id: Math.random().toString(16).slice(2),
      targetQ: target,
    });

    if (item.name === "U1") {
      setModalGateU1Angle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }
    if (item.name === "U2") {
      setModalGateU2Angle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }
    if (item.name === "U3") {
      setModalGateU3Angle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }
    if (item.name === "Rx") {
      setModalGateRxAngle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }
    if (item.name === "Ry") {
      setModalGateRyAngle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }
    if (item.name === "Rz") {
      setModalGateRzAngle(true);
      setCurrentGate(destClone[droppableDestination.index]);
    }

    if (item.name === "measurment") {
      let lineH = 0,
        lineMT = 0,
        circleMT = 0;

      let arrItems = [];
      Object.entries(items).map((col) => arrItems.push(col[1]));
      let numQ = arrItems.length;

      let controlIndex,
        targetIndex = numQ;
      Object.entries(items).forEach((col, index) => {
        if (col[0] === droppableDestination.droppableId) {
          controlIndex = index;
        }
      });

      let diff = controlIndex - targetIndex;

      lineH = String(-45 + -diff * 80) + "px";
      lineMT = String(0) + "px";
      circleMT = String(-5) + "px";

      setMeasGates({
        ...measGates,
        [destClone[droppableDestination.index].id]: {
          lineH: lineH,
          lineMT: lineMT,
          circleMT: circleMT,
        },
      });
    }

    return destClone;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = { ...items };
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    Object.entries(items).forEach((col, index) => {
      if (col[0] === droppableDestination.droppableId) {
        removed.targetQ = index;
      }
    });
    if (removed.controlQ !== undefined) {
      editCHgate(null, removed, droppableDestination.droppableId);
    }

    if (removed.name === "measurment") {
      let lineH = 0,
        lineMT = 0,
        circleMT = 0;

      let arrItems = [];
      Object.entries(items).map((col) => arrItems.push(col[1]));
      let numQ = arrItems.length;

      let controlIndex,
        targetIndex = numQ;
      Object.entries(items).forEach((col, index) => {
        if (col[0] === droppableDestination.droppableId) {
          controlIndex = index;
        }
      });

      let diff = controlIndex - targetIndex;

      lineH = String(-45 + -diff * 80) + "px";
      lineMT = String(0) + "px";
      circleMT = String(-5) + "px";

      setMeasGates({
        ...measGates,
        [destClone[droppableDestination.index].id]: {
          lineH: lineH,
          lineMT: lineMT,
          circleMT: circleMT,
        },
      });
    }

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    //console.log("==> result", result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === "trash" &&
      source.droppableId !== "MENU" &&
      source.droppableId !== "MENU1"
    ) {
      let new_items = {};
      Object.assign(new_items, items);
      new_items[source.droppableId] = new_items[source.droppableId].filter(
        (it, index) => index !== source.index
      );
      setItems(new_items);
    } else {
      switch (source.droppableId) {
        case destination.droppableId:
          setItems({
            ...items,
            [destination.droppableId]: reorder(
              items[source.droppableId],
              source.index,
              destination.index
            ),
          });
          break;
        case "MENU":
          if (destination.droppableId !== "trash") {
            setItems({
              ...items,
              [destination.droppableId]: copy(
                MENU,
                items[destination.droppableId],
                source,
                destination
              ),
            });
          }

          break;
        case "MENU1":
          if (destination.droppableId !== "trash") {
            setItems({
              ...items,
              [destination.droppableId]: copy(
                MENU1,
                items[destination.droppableId],
                source,
                destination
              ),
            });
          }

          break;
        default:
          setItems(
            move(
              items[source.droppableId],
              items[destination.droppableId],
              source,
              destination
            )
          );
          break;
      }
    }
  };

  const onClickAddNewQubit = (e) => {
    setItems({
      ...items,
      [Math.random().toString(16).slice(2)]: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        { init: 0 },
      ],
    });
    setNumCline(numCline + 1);
    setModalContolQ(false);

    let targetIndex = numCline + 1,
      controlIndex;

    Object.entries(measGates).forEach((gate) => {
      Object.entries(items).forEach((col, index) => {
        col[1].forEach((it) => {
          if (it.id === gate[0]) {
            controlIndex = index;
          }
        });
      });

      gate[1].lineH = String(-45 + -(controlIndex - targetIndex) * 80) + "px";
      gate[1].lineMT = String(0) + "px";
      gate[1].circleMT = String(-5) + "px";
    });
    setMeasGates(measGates);
  };

  const onClickServer = () => {
    let arrItems = [];
    setLoading(true);

    Object.entries(items).map((col) => arrItems.push(col[1]));

    function transpose(matrix) {
      const rows = matrix.length,
        cols = matrix[0].length;
      const grid = [];
      for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
      }
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          grid[j][i] = matrix[i][j];
        }
      }
      return grid;
    }
    let arrItemsTransp = transpose(arrItems);
    let clonearrItems = JSON.parse(JSON.stringify(arrItemsTransp));

    clonearrItems.forEach((col) => {
      col.forEach((it) => {
        if (it?.init !== undefined) {
          delete it?.init;
        }
      });
    });

    let qstate = [],
      gate = [];
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.init !== undefined) {
          qstate.push(it.init);
        }
      });
    });

    clonearrItems.forEach((col) => {
      col.forEach((it) => {
        if (it?.id !== undefined) {
          delete it.id;
          it.operation = it.name.toLowerCase();
          it.qbits = [];
          it.qbits.push({
            target: it.targetQ,
            control: it?.controlQ,
            rotation: it?.rotation,
          });
          delete it?.controlQ;
          delete it?.rotation;
          delete it.targetQ;
          delete it.name;
          gate.push(it);
        }
      });
    });

    const result = {
      qNum: arrItems.length,
      shots: shots,
      qStates: qstate,
      gates: gate,
    };

    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    async function postData(url = "", data = {}) {
      console.log("inside");
      try {
        console.log("getting coockie");
        var csrftoken = getCookie("csrftoken");
        console.log(csrftoken);
      } catch (e) {
        console.log("No csrftoken");
      }

      var headers = new Headers();
      headers.append("X-CSRFToken", csrftoken);
      headers.append("Content-Type", "application/json");
      headers.append("X-Requested-With", "XMLHttpRequest");

      const post_resp = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(data),
      }).catch((error) => console.error(error));
      return await post_resp.json();
    }

    var promis = postData("result/", result);

    promis
      .then((val) => {
        console.log(val);
        if (val.isOK === true) {
          setLoading(false);
          setGraph(true);

          const entries = Object.entries(val.hist);
          const dataNew = [];
          const values = Object.values(val.hist);
          let sum = 0;
          values.forEach((value) => {
            sum += value;
          });

          entries.sort((a, b) => a[0] - b[0]);
          entries.forEach(([key, value]) => {
            dataNew.push({
              name: key,
              shots: ((value / sum) * 100).toFixed(2),
            });
          });
          setDataGraph(dataNew);
        } else if (val.isOK === false) {
          setLoading(false);
          setGraph(false);
          setErrorMessage(val.reason);
        }
        return false;
      })
      .catch((reject) => {
        console.log("rejected");
        setLoading(false);
        return false;
      });

    console.log(JSON.stringify(result));
  };

  const onClickClear = () => {
    setItems({
      [Math.random().toString(16).slice(2)]: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        { init: 0 },
      ],
    });
    setChoosedGate([]);
    setMeasGates({});
    setGraph(false);
    setErrorMessage(false);
    setNumCline(1);
  };

  const Menu = () => {
    //const [num, setNum] = useState(0);
    return (
      <div className="menu-container">
        <div className="menu-div">
          <div className="menu-header">Меню</div>
          <Droppable
            droppableId="MENU"
            isDropDisabled={true}
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className="menu"
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                key="menu"
              >
                {MENU.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div key={item.id + 1}>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}
                          className="grid-item-content"
                          key={item.id + 2}
                        >
                          {item.name}
                        </div>
                        {snapshot.isDragging && (
                          <div className="grid-item-content">{item.name}</div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable
            droppableId="MENU"
            isDropDisabled={true}
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className="menu2"
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                key="menu"
              >
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable
            droppableId="MENU1"
            isDropDisabled={true}
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className="menu"
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                key="menu1"
              >
                {MENU1.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div key={item.id}>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}
                          className="grid-item-content"
                        >
                          {item.name !== "measurment" && <div>{item.name}</div>}
                          {item.name === "measurment" && (
                            <div className="gate"></div>
                          )}
                        </div>
                        {snapshot.isDragging && (
                          <div className="grid-item-content">
                            {item.name !== "measurment" && (
                              <div>{item.name}</div>
                            )}
                            {item.name === "measurment" && (
                              <div className="gate"></div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable
            droppableId="MENU1"
            isDropDisabled={true}
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className="menu2"
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                key="menu"
              >
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="menu">
            <div className="grid-item-menu">
              <div className="grid-item-content" draggable>
                <>&#9899;</>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons-div">
          <button className="button" onClick={onClickClear}>
            Очистить
          </button>

          <div className="trash">
            <Droppable droppableId="trash">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                  className="trash-icon"
                >
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    );
  };

  const onClickInitStateQubit = (e, index) => {
    e.preventDefault();
    let new_items = {};
    Object.assign(new_items, items);
    Object.values(new_items[index]).forEach((key) => {
      if (key?.init !== undefined) {
        if (key.init === 0) key.init = 1;
        else if (key.init === 1) key.init = "i";
        else if (key.init === "i") key.init = 0;
      }
    });
    setItems(new_items);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onClickDeleteQubit = (e, id) => {
    e.preventDefault();
    let new_items = {};
    Object.assign(new_items, items);
    Reflect.deleteProperty(new_items, id);
    setItems(new_items);
    setModalContolQ(false);
    setNumCline(numCline - 1);

    let targetIndex = numCline - 1,
      controlIndex,
      ind;

    Object.entries(items).forEach((col, index) => {
      if (col[0] === id) {
        ind = index;
      }
    });

    Object.entries(measGates).map((gate, index) => {
      Object.entries(items).forEach((col, index) => {
        col[1].forEach((it) => {
          if (it.id === gate[0]) {
            controlIndex = index;
          }
        });
      });

      if (ind > controlIndex) {
        gate[1].lineH = String(-45 + -(controlIndex - targetIndex) * 80) + "px";
        gate[1].lineMT = String(0) + "px";
        gate[1].circleMT = String(-5) + "px";
      }
    });
    setMeasGates(measGates);
  };

  const InitStateQubit = (list) => {
    let state;
    items[list.list].forEach((item, index) => {
      if (item?.init !== undefined) {
        state = item?.init;
      }
    });
    return state;
  };

  const editCHgate = (e, item, list) => {
    setSelectedContolQ([]);
    setModalContolQ(true);
    setChoosedTargetQubit(list);

    if (Object.keys(choosedGate).length === 0) {
      setChoosedGate({
        ...choosedGate,
        [item.id]: [],
      });
    } else {
      Object.keys(choosedGate).forEach((gate) => {
        if (gate[0] !== item.id) {
          setChoosedGate({
            ...choosedGate,
            [item.id]: [],
          });
        }
      });
    }

    setCurrentGate(item.id);

    let opt = [];
    Object.entries(items).forEach((col, index) => {
      if (col[0] !== list) {
        opt.push({
          label: "q" + index,
          value: col[0],
        });
      }
    });
    setOptionsContolQ(opt);
  };

  const onCloseModalContolQ = () => setModalContolQ(false);

  const onCloseModalGateU1Angle = () => setModalGateU1Angle(false);
  const onCloseModalGateU2Angle = () => setModalGateU2Angle(false);
  const onCloseModalGateU3Angle = () => setModalGateU3Angle(false);

  const onCloseModalGateRxAngle = () => setModalGateRxAngle(false);
  const onCloseModalGateRyAngle = () => setModalGateRyAngle(false);
  const onCloseModalGateRzAngle = () => setModalGateRzAngle(false);

  const Modal = ({
    visible = false,
    title = "",
    content = "",
    footer = "",
    onClose,
  }) => {
    if (!visible) return null;

    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">{content}</div>
          </div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    );
  };

  const handleControlQChange = (event) => {
    let prev_lineH2 = 0,
      prev_circleMT2 = 0;

    let prev_lineH1 = 0,
      prev_lineMT1 = 0,
      prev_circleMT1 = 0;

    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate) {
          it.controlQ = [];
        }
      });
    });

    Object.entries(choosedGate).forEach((col) => {
      if (col[0] === currentGate) {
        col[1].length = 0;
      }
    });
    event.sort((a, b) => (a.label > b.label ? 1 : -1));
    let n = 0;
    event.forEach((gate) => {
      let lineH1 = 0,
        lineMT1 = 0,
        circleMT1 = 0;

      let lineH2 = 0,
        lineMT2 = 0,
        circleMT2 = 0;

      let controlIndex, targetIndex;
      Object.entries(items).forEach((col, index) => {
        if (col[0] === gate.value) {
          controlIndex = index;
        }
        if (col[0] === choosedTargetQubit) {
          targetIndex = index;
        }
      });

      Object.entries(items).forEach((col) => {
        col[1].forEach((item) => {
          if (item.id === currentGate) {
            //if (item.controlQ.length === 0) {
            //  item.controlQ.push(controlIndex);
            //} else {
            //  item.controlQ.forEach((conQ) => {
            //    if (conQ !== controlIndex) {
            item.controlQ.push(controlIndex);
            //    }
            //  });
            //  }
          }
        });
      });

      let diff = targetIndex - controlIndex - 1;

      let k = 0;
      Object.entries(items).forEach((col) => {
        col[1].forEach((item) => {
          if (item.id === currentGate) {
            if (
              item.name === "U1" ||
              item.name === "U2" ||
              item.name === "U3" ||
              item.name === "Rx" ||
              item.name === "Ry" ||
              item.name === "Rz"
            ) {
              k = -20;
            }
          }
        });
      });
      if (event.length === 1) {
        if (diff >= 0) {
          lineH1 = String(60 + diff * 80) + "px";
          lineMT1 = String(-100 - diff * 80 + k) + "px";
          circleMT1 = String(-65 - diff * 80) + "px";
        } else if (diff < 0) {
          lineH1 = String(-20 + -(diff + 1) * 80) + "px";
          lineMT1 = String(0) + "px";
          circleMT1 = String(-5) + "px";
        }
      } else {
        if (diff >= 0) {
          lineH1 = String(60 + diff * 80 - prev_lineH1) + "px";
          lineMT1 = String(-100 - diff * 80 - prev_lineMT1 + k) + "px";
          circleMT1 = String(-65 - diff * 80 - prev_circleMT1) + "px";
          prev_lineH1 = 60 + diff * 80;
          prev_lineMT1 = -100 - diff * 80 + 10 + k;
          prev_circleMT1 = -65 - diff * 80 + 10;
        } else if (diff < 0) {
          lineH2 = String(-20 + -(diff + 1) * 80 - prev_lineH2) + "px";
          if (n === 0) {
            if (prev_lineMT1 !== 0) {
              lineMT2 = String(-prev_lineMT1 + 5 + k) + "px";
            } else {
              lineMT2 = String(-prev_lineMT1 + k) + "px";
            }
            n++;
          } else {
            lineMT2 = String(0) + "px";
          }

          circleMT2 = String(-5 + prev_circleMT2) + "px";
          prev_lineH2 = -20 + -(diff + 1) * 80;
          prev_circleMT2 = -5;
        }
      }

      Object.entries(choosedGate).forEach((col) => {
        if (col[0] === currentGate) {
          col[1].push({
            lineH1: lineH1,
            lineMT1: lineMT1,
            circleMT1: circleMT1,
            lineH2: lineH2,
            lineMT2: lineMT2,
            circleMT2: circleMT2,
          });
        }
      });

      setChoosedGate(choosedGate);
    });

    setSelectedContolQ(event);
  };

  const handleGateU1Angle1 = (rotation) => {
    setSelectedGateU1AngleLambda(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          it.rotation = rotation;
        }
      });
    });
  };

  const handleGateU2Angle1 = (rotation) => {
    setSelectedGateU2AnglePhi(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          if (it.rotation === undefined) {
            it.rotation = [];
          }
          it.rotation[0] = rotation;
        }
      });
    });
  };

  const handleGateU2Angle2 = (rotation) => {
    setSelectedGateU2AngleLambda(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          if (it.rotation === undefined) {
            it.rotation = [];
          }
          it.rotation[1] = rotation;
        }
      });
    });
  };

  const handleGateU3Angle1 = (rotation) => {
    setSelectedGateU3AngleTheta(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          if (it.rotation === undefined) {
            it.rotation = [];
          }
          it.rotation[0] = rotation;
        }
      });
    });
  };

  const handleGateU3Angle2 = (rotation) => {
    setSelectedGateU3AngleLambda(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          if (it.rotation === undefined) {
            it.rotation = [];
          }
          it.rotation[1] = rotation;
        }
      });
    });
  };
  const handleGateU3Angle3 = (rotation) => {
    setSelectedGateU3AnglePhi(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          if (it.rotation === undefined) {
            it.rotation = [];
          }
          it.rotation[2] = rotation;
        }
      });
    });
  };

  const handleGateRxAngle = (rotation) => {
    setSelectedGateRxAngle(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          it.rotation = rotation;
        }
      });
    });
  };

  const handleGateRyAngle = (rotation) => {
    setSelectedGateRyAngle(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          it.rotation = rotation;
        }
      });
    });
  };

  const handleGateRzAngle = (rotation) => {
    setSelectedGateRzAngle(rotation);
    Object.entries(items).forEach((col) => {
      col[1].forEach((it) => {
        if (it.id === currentGate.id) {
          it.rotation = rotation;
        }
      });
    });
  };

  const Button = ({ item }) => {
    const buttonRef = useRef();

    useDoubleClick({
      onDoubleClick: (e) => {
        if (item.name === "Rx") {
          setModalGateRxAngle(true);
          setSelectedGateRxAngle(item?.rotation);
          setCurrentGate(item);
        }

        if (item.name === "Ry") {
          setModalGateRyAngle(true);
          setSelectedGateRyAngle(item?.rotation);
          setCurrentGate(item);
        }

        if (item.name === "Rz") {
          setModalGateRzAngle(true);
          setSelectedGateRzAngle(item?.rotation);
          setCurrentGate(item);
        }

        if (item.name === "U1") {
          setModalGateU1Angle(true);
          setSelectedGateU1AngleLambda(item?.rotation);
          setCurrentGate(item);
        }
        if (item.name === "U2") {
          setModalGateU2Angle(true);
          setSelectedGateU2AnglePhi(
            item?.rotation === undefined ? 0 : item?.rotation[0]
          );
          setSelectedGateU2AngleLambda(
            item?.rotation === undefined ? 0 : item?.rotation[1]
          );

          setCurrentGate(item);
        }
        if (item.name === "U3") {
          setModalGateU3Angle(true);
          setSelectedGateU3AngleTheta(
            item?.rotation === undefined ? 0 : item?.rotation[0]
          );
          setSelectedGateU3AngleLambda(
            item?.rotation === undefined ? 0 : item?.rotation[1]
          );
          setSelectedGateU3AnglePhi(
            item?.rotation === undefined ? 0 : item?.rotation[2]
          );
          setCurrentGate(item);
        }
      },
      ref: buttonRef,
      latency: 250,
    });

    return <div className="btnU" ref={buttonRef}></div>;
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container">
          <div>
            <Menu />
            <div style={{ fontSize: "1.125rem", marginLeft: "10px" }}>
              Количество экспериментов
            </div>
            <InputNumber
              className="input"
              value={shots}
              onChange={setShots}
              placeholder="Введите значение..."
            />
            <button className="button" onClick={onClickServer}>
              Расчет
            </button>
          </div>

          <div className="content">
            <div>
              <button className="button add" onClick={onClickAddNewQubit}>
                <div>+</div>
              </button>
            </div>
            {Object.keys(items).map((list, i) => {
              return (
                <div className="div-line">
                  <div className="container-line">
                    <p>q{i}</p>
                    <button
                      className="init-q-button"
                      onClick={(e) => onClickInitStateQubit(e, list)}
                    >
                      {<>|{<InitStateQubit list={list} />}&#10217; </>}
                    </button>
                    <Droppable
                      key={list}
                      droppableId={list}
                      direction="horizontal"
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          isDraggingOver={snapshot.isDraggingOver}
                          className="circuit"
                          key={list + 1}
                        >
                          {items[list].map((item, index) => (
                            <>
                              {item.id && (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      isDragging={snapshot.isDragging}
                                      style={provided.draggableProps.style}
                                      onDragOver={(e) => onDragOver(e)}
                                      onDrop={(e) => editCHgate(e, item, list)}
                                      key={item.id + 2}
                                      className="grid-item"
                                    >
                                      <div
                                        key={item.id + 1}
                                        className="grid-item-content"
                                      >
                                        {item.name !== "measurment" && (
                                          <div>{item.name}</div>
                                        )}
                                        {item.name === "measurment" && (
                                          <div className="gate"></div>
                                        )}
                                      </div>
                                      {item.name === "U1" && (
                                        <Button item={item} />
                                      )}
                                      {item.name === "U2" && (
                                        <Button item={item} />
                                      )}
                                      {item.name === "U3" && (
                                        <Button item={item} />
                                      )}
                                      {item.name === "Rx" && (
                                        <Button item={item} />
                                      )}
                                      {item.name === "Ry" && (
                                        <Button item={item} />
                                      )}
                                      {item.name === "Rz" && (
                                        <Button item={item} />
                                      )}
                                      {Object.keys(choosedGate).map((gate) =>
                                        choosedGate[gate].map((it) => (
                                          <>
                                            {it.lineH1 !== 0 &&
                                              gate === item.id && (
                                                <>
                                                  <div
                                                    className="vl"
                                                    key={item.id + 3}
                                                    style={{
                                                      height: it.lineH1,
                                                      marginTop: it.lineMT1,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="circle"
                                                    key={item.id + 4}
                                                    style={{
                                                      marginTop: it.circleMT1,
                                                    }}
                                                  ></div>
                                                </>
                                              )}
                                            {it.lineH2 !== 0 &&
                                              gate === item.id && (
                                                <>
                                                  <div
                                                    className="vl"
                                                    key={item.id + 3}
                                                    style={{
                                                      height: it.lineH2,
                                                      marginTop: it.lineMT2,
                                                    }}
                                                  ></div>
                                                  <div
                                                    className="circle"
                                                    key={item.id + 4}
                                                    style={{
                                                      marginTop: it.circleMT2,
                                                    }}
                                                  ></div>
                                                </>
                                              )}
                                          </>
                                        ))
                                      )}
                                      {Object.entries(measGates).map((gate) => (
                                        <>
                                          {gate[1].lineH !== 0 &&
                                            gate[0] === item.id && (
                                              <>
                                                <div
                                                  className="vl"
                                                  key={item.id + 5}
                                                  style={{
                                                    height: gate[1].lineH,
                                                    marginTop: gate[1].lineMT,
                                                  }}
                                                ></div>
                                                <div
                                                  className="circle"
                                                  key={item.id + 6}
                                                  style={{
                                                    marginTop: gate[1].circleMT,
                                                  }}
                                                ></div>
                                              </>
                                            )}
                                        </>
                                      ))}
                                    </div>
                                  )}
                                </Draggable>
                              )}

                              {!item.init && !item.id && (
                                <Draggable
                                  key={"empty" + index + list}
                                  draggableId={"empty" + index + list}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      isDragging={snapshot.isDragging}
                                      key={"empty" + index + 2 + list}
                                    >
                                      <div
                                        className="empty"
                                        key={"empty" + index + 3 + list}
                                      ></div>
                                    </div>
                                  )}
                                </Draggable>
                              )}
                            </>
                          ))}
                          <div key={list + 5} className="line"></div>
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                  <div className="minus">
                    <button
                      className="button add"
                      key={i}
                      onClick={(e) => onClickDeleteQubit(e, list)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="c-qubit">
              <div className="label-c-qubit">c{numCline}</div>
              <div className="container-line-c">
                <div className="line-c"></div>
                <div className="line-c"></div>
              </div>
            </div>
          </div>
          {graph && (
            <>
              <Graph data={dataGraph} loading={loading} />
            </>
          )}
          {errorMessage && (
            <>
              <ErrorMessage data={errorMessage} loading={loading} />
            </>
          )}
        </div>
      </DragDropContext>

      <Modal
        visible={isModalContolQ}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Управляющий кубит
              </div>
              <Select
                isMulti
                name="qubits"
                options={optionsContolQ}
                value={selectedContolQ}
                //defaultValue={selectedQubit}
                onChange={handleControlQChange}
                placeholder="Выберете..."
                noOptionsMessage={() => "Нет"}
                maxMenuHeight="150px"
              />
            </div>
          </>
        }
        //footer={<button onClick={onClose}>Применить</button>}
        onClose={onCloseModalContolQ}
      />
      <Modal
        visible={isModalGateU1Angle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол &lambda;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU1AngleLambda}
                onChange={handleGateU1Angle1}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        onClose={onCloseModalGateU1Angle}
      />
      <Modal
        visible={isModalGateU2Angle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол &phi;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU2AnglePhi}
                onChange={handleGateU2Angle1}
                placeholder="Введите значение..."
              />

              <div
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                Угол &lambda;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU2AngleLambda}
                onChange={handleGateU2Angle2}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        // footer={<button onClick={onCloseModalGateAngle}>Применить</button>}
        onClose={onCloseModalGateU2Angle}
      />
      <Modal
        visible={isModalGateU3Angle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол &theta;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU3AngleTheta}
                onChange={handleGateU3Angle1}
                placeholder="Введите значение..."
              />
              <div
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                Угол &lambda;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU3AngleLambda}
                onChange={handleGateU3Angle2}
                placeholder="Введите значение..."
              />
              <div
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                Угол &phi;
              </div>
              <InputNumber
                className="input"
                value={selectedGateU3AnglePhi}
                onChange={handleGateU3Angle3}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        // footer={<button onClick={onCloseModalGateAngle}>Применить</button>}
        onClose={onCloseModalGateU3Angle}
      />
      <Modal
        visible={isModalGateRxAngle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол
              </div>
              <InputNumber
                className="input"
                value={selectedGateRxAngle}
                onChange={handleGateRxAngle}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        onClose={onCloseModalGateRxAngle}
      />
      <Modal
        visible={isModalGateRyAngle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол
              </div>
              <InputNumber
                className="input"
                value={selectedGateRyAngle}
                onChange={handleGateRyAngle}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        onClose={onCloseModalGateRyAngle}
      />
      <Modal
        visible={isModalGateRzAngle}
        title="Выберите:"
        content={
          <>
            <div className="block-control">
              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                Угол
              </div>
              <InputNumber
                className="input"
                value={selectedGateRzAngle}
                onChange={handleGateRzAngle}
                placeholder="Введите значение..."
              />
            </div>
          </>
        }
        onClose={onCloseModalGateRzAngle}
      />
    </>
  );
};

export default Circuit;
