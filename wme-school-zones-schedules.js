// ==UserScript==
// @name          WME School Zones Schedules
// @namespace     https://greasyfork.org/es/scripts/601948-wme-school-zones-schedules
// @version       1.0.1
// @description   Script para visualizar zonas escolares y sus horarios asignados
// @author        carlosveny
// @match         https://beta.waze.com/*editor*
// @match         https://www.waze.com/*editor*
// @exclude       https://www.waze.com/*user/*editor/*
// @icon          data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbGlwcGF0aCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMsIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQoKICAgICAgLmNscy01IHsKICAgICAgICBmaWxsOiAjZmZjNDAwOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwcGF0aCI+CiAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBjbGFzcz0iY2xzLTEiPgogICAgPGc+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIwLjI0LDJjLTIuMzQtMi4zNC02LjE0LTIuMzQtOC40OSwwTDIsMTEuNzZjLTIuMzQsMi4zNC0yLjM0LDYuMTQsMCw4LjQ5bDkuNzYsOS43NmMyLjM0LDIuMzQsNi4xNCwyLjM0LDguNDksMGw5Ljc2LTkuNzZjMi4zNC0yLjM0LDIuMzQtNi4xNCwwLTguNDlMMjAuMjQsMloiLz4KICAgICAgPHJlY3QgY2xhc3M9ImNscy01IiB4PSI2LjEiIHk9IjYuMSIgd2lkdGg9IjE5LjgiIGhlaWdodD0iMTkuOCIgcng9IjMiIHJ5PSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi42MyAxNikgcm90YXRlKC00NSkiLz4KICAgIDwvZz4KICA8L2c+CiAgPGc+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yOC41OSwxMy4xN0wxOC44MywzLjQxYy0xLjUxLTEuNTEtNC4xNS0xLjUxLTUuNjYsMEwzLjQxLDEzLjE3Yy0xLjU2LDEuNTYtMS41Niw0LjEsMCw1LjY2bDkuNzYsOS43NmMuNzguNzgsMS44LDEuMTcsMi44MywxLjE3czIuMDUtLjM5LDIuODMtMS4xN2w5Ljc2LTkuNzZjMS41Ni0xLjU2LDEuNTYtNC4xLDAtNS42NlpNMjcuMTcsMTcuNDFsLTkuNzYsOS43NmMtLjc4Ljc4LTIuMDUuNzgtMi44MywwbC05Ljc2LTkuNzZjLS43OC0uNzgtLjc4LTIuMDUsMC0yLjgzTDE0LjU5LDQuODNjLjM4LS4zOC44OC0uNTksMS40MS0uNTlzMS4wNC4yMSwxLjQxLjU5bDkuNzYsOS43NmMuNzguNzguNzgsMi4wNSwwLDIuODNaIi8+CiAgICA8Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjIwLjc1IiBjeT0iMTIuNSIgcj0iMS4yNSIvPgogICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjIuOTMsMTYuMDRjLS42LjA4LTEuMTgtLjIyLTEuNDUtLjc2bC0uMjMtLjQ2Yy0uMjUtLjUtLjc2LS44MS0xLjMxLS44MWgtMi4zM2MtLjU0LDAtMS4wMS0uMzQtMS4xOC0uODVsLS4yNi0uNzhjLS4xOC0uNTItLjY2LS44Ny0xLjIxLS44N2gtMS4yNWMtMS45MywwLTMuNjcsMS4xOC00LjM5LDIuOTctLjE1LjM4LjAzLjgyLjQyLjk4LjM4LjE1LjgyLS4wMy45OC0uNDIuNDUtMS4xMywxLjUtMS45LDIuNjktMi4wMWwtMy41NSw2Ljk1Yy0uMTkuMzctLjA0LjgyLjMzLDEuMDEuMzcuMTkuODIuMDQsMS4wMS0uMzNsMS43My0zLjQuODguODhjLjA2LjA2LjA5LjE1LjA3LjIzbC0uNCwxLjc0Yy0uMDkuNC4xNi44MS41Ni45LjQuMDkuODEtLjE2LjktLjU2bC40LTEuNzRjLjE0LS41OS0uMDQtMS4yMS0uNDctMS42M2wtMS4yMy0xLjIyLDEuMjctMi40OS4wOS4yN2MuMzgsMS4xMiwxLjQzLDEuODcsMi42MSwxLjg3aDEuMTRsLTEuOTMsNC41Yy0uMTYuMzguMDEuODIuMzkuOTguMzguMTYuODItLjAxLjk4LS4zOWwuNTgtMS4zNCwxLjAyLDEuNDdjLjI0LjM0LjcuNDMsMS4wNC4xOS4zNC0uMjQuNDMtLjcuMTktMS4wNGwtMS41LTIuMTZzLS4wNC0uMDUtLjA2LS4wOGwuNy0xLjY0Yy41NywxLjA4LDEuNzYsMS42OSwyLjk3LDEuNTIuNDEtLjA2LjctLjQ0LjY0LS44NS0uMDYtLjQxLS40NC0uNy0uODUtLjY0WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTUuNzEsMTAuOTdjLjk3LDAsMS43NS0uNzgsMS43NS0xLjc1cy0uNzgtMS43NS0xLjc1LTEuNzUtMS43NS43OC0xLjc1LDEuNzUuNzgsMS43NSwxLjc1LDEuNzVaIi8+CiAgPC9nPgo8L3N2Zz4=
// @grant         GM_xmlhttpRequest
// @grant         unsafeWindow
// @copyright     carlosveny - 2026
// @license       Copyright carlosveny
// @downloadURL   https://update.greasyfork.org/scripts/601948/WME%20School%20Zones%20Schedules.user.js
// @updateURL     https://update.greasyfork.org/scripts/601948/WME%20School%20Zones%20Schedules.meta.js
// ==/UserScript==

// Example URL: https://www.waze.com/row-Descartes/app/v1/Features/Schedules?ids=6f5c1f7a-188c-49eb-95f3-f2268d49b1d4,5c88c550-f85c-48c7-b287-b7f4aed76553&expand=true

// ----------------------------------------------------
// GLOBAL VARIABLES / MAIN THREAD
// ----------------------------------------------------
const ID_TOTAL = 'wme_school_zones_schedules_total';
const ID_ANALIZE = 'wme_school_zones_schedules_analize';
const ID_RESULT_CONTAINER = 'wme_school_zones_schedules_result_container';
const ID_CHECKBOX_GROUP = 'wme_school_zones_schedules_checkbox_group';
const ID_TABLES_CONTAINER = 'wme_school_zones_schedules_table_container';
const CLASS_TABLE = 'wme_school_zones_schedules_table';
let SCHOOL_ZONES = null;
let SCHOOL_ZONES_ANALIZED = false;
let GROUP_BY_SCHEDULE = false;
let SDK;
unsafeWindow.SDK_INITIALIZED.then(bootstrap);

// ----------------------------------------------------
// MAIN FUNCTIONS
// ----------------------------------------------------

function bootstrap() {
  SDK = getWmeSdk({ scriptId: 'wme-school-zones-schedules', scriptName: 'WME School Zones Schedules', mode: 'async' });
  SDK.Events.once({ eventName: 'wme-ready' }).then(checkWazeReady);
}

async function init() {
  console.log(`WME School Zones Schedules: Initialized v${GM_info.script.version}`);
  loadCSS();
  await createTab();
  registerEvents();
  discoverSchoolZones();
}

async function discoverSchoolZones() {
  const permanentHazards = await SDK.DataModel.PermanentHazards.getAll();
  console.log(permanentHazards);
  SCHOOL_ZONES = permanentHazards?.filter(ph => ph.type === 'SCHOOL_ZONE');
  const totalSZ = SCHOOL_ZONES?.length ?? 0;
  document.getElementById(ID_TOTAL).innerHTML =
    `<b>${totalSZ}</b> zona${totalSZ === 1 ? '' : 's'} escolar${totalSZ === 1 ? '' : 'es'} encontrada${totalSZ === 1 ? '' : 's'}`;
  document.getElementById(ID_TOTAL).style.color = 'orange';
  document.getElementById(ID_ANALIZE).disabled = totalSZ === 0;
  createSchoolZonesTableContent();
}

function analizeSchoolZones() {
  triggerSpinner(true);
  const scheduleIds = SCHOOL_ZONES.map(schoolZone => schoolZone.scheduleId).join(',');
  GM_xmlhttpRequest({
    url: `https://www.waze.com/row-Descartes/app/v1/Features/Schedules?ids=${scheduleIds}&expand=true`,
    method: 'GET',
    onload: function (response) {
      const schedules = JSON.parse(response.responseText)?.schedules?.objects;
      SCHOOL_ZONES = getSchoolZonesWithScheduleNames(schedules);
      createSchoolZonesTableContent(true);

      triggerSpinner(false);
      document.getElementById(ID_TOTAL).style.color = 'green';
      document.getElementById(ID_TOTAL).innerHTML = document
        .getElementById(ID_TOTAL)
        .innerHTML.replace('encontrada', 'analizada');
      SCHOOL_ZONES_ANALIZED = true;
    },
  });
}

function getSchoolZonesWithScheduleNames(schedules) {
  return SCHOOL_ZONES.map(schoolZone => {
    const generalScheduleId = schedules
      .find(sch => sch.id === schoolZone.scheduleId)
      ?.timeframes?.find(tf => tf.relationType === 'INCLUDE')?.reference?.scheduleId;
    const generalScheduleName = schedules.find(sch => sch.id === generalScheduleId)?.name;
    return {
      ...schoolZone,
      scheduleName: generalScheduleName,
    };
  });
}

// ----------------------------------------------------
// HTML FUNCTIONS
// ----------------------------------------------------

async function createTab() {
  const { tabLabel, tabPane } = await SDK.Sidebar.registerScriptTab();

  tabLabel.innerHTML = `<svg style="height:1rem; margin-top: 0.4rem" data-name="Layer 1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"><defs><style>.cls-1{clip-path:url(#a)}.cls-2{fill:none}.cls-2,.cls-3,.cls-4,.cls-5{stroke-width:0px}.cls-3{fill:#fff;fill-rule:evenodd}.cls-5{fill:#ffc400}</style><clipPath id="a"><rect class="cls-2" width="32" height="32"/></clipPath></defs><g class="cls-1"><path class="cls-3" d="M20.24,2c-2.34-2.34-6.14-2.34-8.49,0L2,11.76c-2.34,2.34-2.34,6.14,0,8.49l9.76,9.76c2.34,2.34,6.14,2.34,8.49,0l9.76-9.76c2.34-2.34,2.34-6.14,0-8.49L20.24,2Z"/><rect class="cls-5" transform="translate(-6.63 16) rotate(-45)" x="6.1" y="6.1" width="19.8" height="19.8" rx="3" ry="3"/></g><path class="cls-4" d="M28.59,13.17L18.83,3.41c-1.51-1.51-4.15-1.51-5.66,0L3.41,13.17c-1.56,1.56-1.56,4.1,0,5.66l9.76,9.76c.78.78,1.8,1.17,2.83,1.17s2.05-.39,2.83-1.17l9.76-9.76c1.56-1.56,1.56-4.1,0-5.66ZM27.17,17.41l-9.76,9.76c-.78.78-2.05.78-2.83,0l-9.76-9.76c-.78-.78-.78-2.05,0-2.83L14.59,4.83c.38-.38.88-.59,1.41-.59s1.04.21,1.41.59l9.76,9.76c.78.78.78,2.05,0,2.83Z"/><circle class="cls-4" cx="20.75" cy="12.5" r="1.25"/><path class="cls-4" d="M22.93,16.04c-.6.08-1.18-.22-1.45-.76l-.23-.46c-.25-.5-.76-.81-1.31-.81h-2.33c-.54,0-1.01-.34-1.18-.85l-.26-.78c-.18-.52-.66-.87-1.21-.87h-1.25c-1.93,0-3.67,1.18-4.39,2.97-.15.38.03.82.42.98.38.15.82-.03.98-.42.45-1.13,1.5-1.9,2.69-2.01l-3.55,6.95c-.19.37-.04.82.33,1.01.37.19.82.04,1.01-.33l1.73-3.4.88.88c.06.06.09.15.07.23l-.4,1.74c-.09.4.16.81.56.9.4.09.81-.16.9-.56l.4-1.74c.14-.59-.04-1.21-.47-1.63l-1.23-1.22,1.27-2.49.09.27c.38,1.12,1.43,1.87,2.61,1.87h1.14l-1.93,4.5c-.16.38.01.82.39.98.38.16.82-.01.98-.39l.58-1.34,1.02,1.47c.24.34.7.43,1.04.19.34-.24.43-.7.19-1.04l-1.5-2.16s-.04-.05-.06-.08l.7-1.64c.57,1.08,1.76,1.69,2.97,1.52.41-.06.7-.44.64-.85-.06-.41-.44-.7-.85-.64Z"/><path class="cls-4" d="M15.71,10.97c.97,0,1.75-.78,1.75-1.75s-.78-1.75-1.75-1.75-1.75.78-1.75,1.75.78,1.75,1.75,1.75Z"/></svg>`;
  tabLabel.title = 'School Zones Schedules';

  const container = document.createElement('div');
  container.style.paddingInline = '1rem';
  container.appendChild(getTabHeader());
  container.appendChild(getTabContent());
  container.appendChild(getTabFooter());
  tabPane.appendChild(container);
}

function getTabHeader() {
  const header = document.createElement('div');
  header.innerHTML = `
    <h6 style="margin: 0">School Zones Schedules</h6>
    <p>v${GM_info.script.version}</p>
  `;
  return header;
}

function getTabFooter() {
  const footer = document.createElement('div');
  footer.innerHTML = `
    <hr style="margin-bottom: 0.5rem">
    <div style="font-size: 0.8rem; display: flex; gap: 1rem; margin-bottom: 1rem">
      <a href="https://carlosveny.com" target="_blank">carlosveny.com</a>
      <a href="https://www.waze.com/user/editor/carlosveny" target="_blank">WME carlosveny</a>
    </div>
  `;
  return footer;
}

function getTabContent() {
  const totalDiv = document.createElement('p');
  totalDiv.setAttribute('id', ID_TOTAL);
  totalDiv.style.margin = 0;

  const analizeButton = document.createElement('button');
  analizeButton.setAttribute('id', ID_ANALIZE);
  analizeButton.innerText = 'Analizar horarios';
  analizeButton.onclick = analizeSchoolZones;

  const headerContent = document.createElement('div');
  headerContent.style.display = 'flex';
  headerContent.style.justifyContent = 'space-between';
  headerContent.style.alignItems = 'center';
  headerContent.style.gap = '1rem';

  headerContent.appendChild(totalDiv);
  headerContent.appendChild(analizeButton);

  const resultContainer = document.createElement('div');
  resultContainer.setAttribute('id', ID_RESULT_CONTAINER);

  const contentContainer = document.createElement('div');
  contentContainer.appendChild(headerContent);
  contentContainer.appendChild(resultContainer);

  return contentContainer;
}

function createSchoolZonesTableContent(withSchedules = false) {
  document.getElementById(ID_RESULT_CONTAINER).innerHTML = '';
  if (SCHOOL_ZONES?.length) {
    const checkboxGroup = document.createElement('input');
    checkboxGroup.type = 'checkbox';
    checkboxGroup.id = ID_CHECKBOX_GROUP;
    checkboxGroup.checked = GROUP_BY_SCHEDULE;
    checkboxGroup.onclick = () => {
      GROUP_BY_SCHEDULE = checkboxGroup.checked;
      generateTables(true);
    };
    const label = document.createElement('label');
    label.style.fontWeight = '200';
    label.style.marginLeft = '0.5rem';
    label.htmlFor = ID_CHECKBOX_GROUP;
    label.appendChild(document.createTextNode('Agrupar por horario'));
    checkboxGroup.disabled = !withSchedules;

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', ID_TABLES_CONTAINER);

    document.getElementById(ID_RESULT_CONTAINER).appendChild(checkboxGroup);
    document.getElementById(ID_RESULT_CONTAINER).appendChild(label);
    document.getElementById(ID_RESULT_CONTAINER).appendChild(tableContainer);
    generateTables(withSchedules);
  }
}

function generateTables(withSchedules) {
  const tablesContainer = document.getElementById(ID_TABLES_CONTAINER);
  tablesContainer.innerHTML = '';
  if (GROUP_BY_SCHEDULE && withSchedules) {
    console.log(SCHOOL_ZONES);
    const scheduleNames = [...new Set(SCHOOL_ZONES.map(schoolZone => schoolZone.scheduleName))];
    const schoolZonesGroupedBySchedule = scheduleNames.map(scheduleName =>
      SCHOOL_ZONES.filter(schoolZone => schoolZone.scheduleName === scheduleName),
    );
    console.log(scheduleNames, schoolZonesGroupedBySchedule);
    schoolZonesGroupedBySchedule.forEach((schoolZones, idx) => {
      const accordionTitle = document.createElement('summary');
      accordionTitle.textContent = scheduleNames[idx];
      const accordion = document.createElement('details');
      accordion.open = true;
      accordion.appendChild(accordionTitle);
      accordion.appendChild(getTable(schoolZones, withSchedules));
      tablesContainer.appendChild(accordion);
    });
  } else {
    tablesContainer.appendChild(getTable(SCHOOL_ZONES, withSchedules));
  }
}

function getTable(schoolZones, withSchedules) {
  const table = document.createElement('table');
  table.setAttribute('class', CLASS_TABLE);
  table.innerHTML = `
      <tr>
        <th style="font-weight: 500">Nombre</th>
        ${withSchedules ? '<th style="font-weight: 500">Horario</th>' : ''}
        <th><i class="fa fa-mouse-pointer" style="display: flex; justify-content: center"></i></th>
      </tr>
    `;

  schoolZones.forEach(schoolZone => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.innerText = schoolZone.name;
    const scheduleCell = document.createElement('td');
    scheduleCell.innerText = schoolZone.scheduleName;
    const actionsCell = document.createElement('td');
    const navigateButton = document.createElement('button');
    navigateButton.style.width = '100%';
    navigateButton.title = 'Seleccionar zona escolar';
    navigateButton.innerHTML = '<i class="fa fa-eye"></i>';
    navigateButton.onclick = () => openSchoolZone(schoolZone.id);
    actionsCell.appendChild(navigateButton);

    row.appendChild(nameCell);
    if (withSchedules) {
      row.appendChild(scheduleCell);
    }
    row.appendChild(actionsCell);
    table.appendChild(row);
  });
  return table;
}

function triggerSpinner(activate) {
  if (activate) {
    const spinnerContainer = document.createElement('span');
    spinnerContainer.setAttribute('class', 'loader-container');
    const spinner = document.createElement('span');
    spinner.setAttribute('class', 'loader');
    spinnerContainer.appendChild(spinner);
    document.getElementById(ID_ANALIZE).style.color = 'transparent';
    document.getElementById(ID_ANALIZE).appendChild(spinnerContainer);
    document.getElementById(ID_ANALIZE).disabled = true;
  } else {
    document.getElementById(ID_ANALIZE).innerHTML = 'Analizar horarios';
    document.getElementById(ID_ANALIZE).style.color = 'white';
  }
}

function loadCSS() {
  const style = document.createElement('style');
  style.textContent = `
    #${ID_RESULT_CONTAINER} {
      margin-top: 1rem;
      input:disabled+label {
        color: #afafaf;
      }
      details {
        margin-bottom: 0.5rem;
      }
      details > summary {
        display: list-item;
        list-style: disclosure-closed;
        cursor: pointer;
        margin: 0 0 0.2rem 1rem;
        font-weight: 600;
      }

      details[open] > summary {
        list-style: disclosure-open;
      }
    }
    .${CLASS_TABLE} {
      border-collapse: collapse;
      width: 100%;
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 2px;
      }
      button {
        border: 0;
        background-color: transparent;
        padding: 0;
        height: 100%;
      }
    }
    #${ID_ANALIZE}:disabled {
      opacity: 0.4;
    }
    #${ID_ANALIZE}:hover:not(:disabled) {
      background-color: #0585db
    }
    #${ID_ANALIZE} {
      margin: 0;
      background-color: #0099ff;
      color: white;
      padding: .2rem .75rem;
      border-radius: 1rem;
      border: 0;
      position: relative;
      height: 100%;
      line-height: 1rem;

      .loader-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .loader {
        width: 12px;
        height: 12px;
        border: 2px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  document.head.appendChild(style);
}

// ----------------------------------------------------
// WME CORE FUNCTIONS
// ----------------------------------------------------

function checkWazeReady() {
  SDK.DataModel.Countries.getTopCountry().then(init);
}

function registerEvents() {
  SDK.Events.on({
    eventName: 'wme-map-move-end',
    eventHandler: () => discoverSchoolZones(),
  });
}

function openSchoolZone(id) {
  SDK.Editing.setSelection({
    selection: {
      objectType: 'permanentHazard',
      ids: [id],
    },
  });
}
