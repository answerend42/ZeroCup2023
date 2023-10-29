<template>
  <div class="event-calendar">
    <div class="controls">
      <button @click="previousMonth">&lt; 上一个月</button>
      <select v-model="selectedYear" @change="updateCalendar">
        <option v-for="year in availableYears" :value="year">{{ year }}</option>
      </select>
      <select v-model="selectedMonth" @change="updateCalendar">
        <option v-for="(month, index) in months" :value="index">{{ month }}</option>
      </select>
      <button @click="nextMonth">下一个月 &gt;</button>
    </div>
    <table class="calendar">
      <thead>
        <tr>
          <th v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks" :key="week[0]">
          <td v-for="(day, index) in week" :key="day" class="day" @click="viewDayEvents(day)">
            {{ day }}
            <div class="event-bars">
              <div
                v-for="event in getEventsForDay(day)"
                :key="event.id"
                :class="event.color"
                class="event-bar"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        { id: 1, title: "Event 1", date: "2023-11-01", club: "Club X" },
        { id: 2, title: "Event 2", date: "2023-11-02", club: "Club Y" },
        { id: 3, title: "Event 3", date: "2023-11-02", club: "Club Z" },
        // 添加更多活动
      ],
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
    };
  },
  computed: {
    months() {
      return [
        "一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月",
      ];
    },
    days() {
      return ["日", "一", "二", "三", "四", "五", "六"];
    },
    weeks() {
      const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
      const lastDate = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
      let weeks = [[]];
      for (let day = 1; day <= lastDate; day++) {
        if (weeks[weeks.length - 1].length === 7) {
          weeks.push([]);
        }
        if (day === 1) {
          for (let i = 0; i < firstDay; i++) {
            weeks[weeks.length - 1].push(null);
          }
        }
        weeks[weeks.length - 1].push(day);
      }
      return weeks;
    },
    availableYears() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 10 }, (_, index) => currentYear - 5 + index);
    },
  },
  methods: {
    updateCalendar() {
      // 在年份或月份变化时更新日历
    },
    previousMonth() {
      // 切换到上一个月
    },
    nextMonth() {
      // 切换到下一个月
    },
    getEventsForDay(day) {
      if (day === null) {
        return [];
      }
      const year = this.selectedYear;
      const month = this.selectedMonth + 1;
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      return this.events.filter(event => event.date === formattedDate);
    },
    viewDayEvents(day) {
      // 点击某一天的事件处理，显示活动的详细信息
      const events = this.getEventsForDay(day);
      // 处理显示活动详细信息的逻辑
    },
  },
};
</script>

<style scoped>
.event-calendar {
  text-align: center;
}

.controls {
  margin-bottom: 20px;
}

.calendar {
  border-collapse: collapse;
  margin: 0 auto;
}

th {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
}

td {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
}

td:hover {
  background-color: #f0f0f0;
}

.event-bars {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-bar {
  width: 100%;
  height: 20px;
  margin: 2px 0;
  cursor: pointer;
}

.color-ClubX {
  background-color: blue;
}

.color-ClubY {
  background-color: green;
}

.color-ClubZ {
  background-color: red;
}


</style>
