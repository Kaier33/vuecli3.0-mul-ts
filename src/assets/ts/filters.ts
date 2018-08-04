// 公共filters 

const filters: object = {
    /**
     * 常规日期格式化
     * @param {number} dateTimeStamp
     * @param {string} type E.g: 'YYYY-MM-DD'、'YYYY-MM-DD hh:mm:ss'
     */
    getFormatDate: (dateTimeStamp: number | string, type: string = 'YYYY-MM-DD') => {
        const timer = new Date(dateTimeStamp),
            seperator1 = "-",
            seperator2 = ":",
            year = timer.getFullYear();
        let month: string | number = timer.getMonth() + 1,
            day: string | number = timer.getDate();
        if (month >= 1 && month <= 9) { month = "0" + month; }
        if (day >= 0 && day <= 9) { day = "0" + day; }
        switch (type) {
            case 'YYYY-MM-DD':
                return year + seperator1 + month + seperator1 + day;
            case 'YYYY-MM-DD hh:mm:ss':
                return year + seperator1 + month + seperator1 + day + " " + timer.getHours() + seperator2 + timer.getMinutes() +
                    seperator2 + timer.getSeconds();
            default:
                return dateTimeStamp;
        }
    },

    /**
     * 留言日期的格式化
     * @param  {number} dateTimeStamp     
     */
    getDateDiff: (dateTimeStamp: number) => {
        let result = "";
        const minute = 1000 * 60,
            hour = minute * 60,
            day = hour * 24,
            halfamonth = day * 15,
            month = day * 30,
            year = month * 12,
            now = new Date().getTime(),
            diffValue = now - dateTimeStamp;
        if (diffValue < 0) {
            return;
        }
        const yearC = diffValue / year,
            monthC = diffValue / month,
            weekC = diffValue / (7 * day),
            dayC = diffValue / day,
            hourC = diffValue / hour,
            minC = diffValue / minute;
        if (yearC >= 1) {
            result = "" + parseInt(String(yearC), 10) + "年前";
        } else if (monthC >= 1) {
            result = "" + parseInt(String(monthC), 10) + "月前";
        } else if (weekC >= 1) {
            result = "" + parseInt(String(weekC), 10) + "周前";
        } else if (dayC >= 1) {
            result = "" + parseInt(String(dayC), 10) + "天前";
        } else if (hourC >= 1) {
            result = "" + parseInt(String(hourC), 10) + "小时前";
        } else if (minC >= 1) {
            result = "" + parseInt(String(minC), 10) + "分钟前";
        } else { result = "刚刚"; }
        return result;
    },

    /**
     * 预留,暂时用不上
     * 留言日期格式化定制版. 例如说 超过 1个月 之后的则显示  YYYY-MM-DD 这种格式
     * @param  {number} dateTimeStamp     
     */
    getDateDiff2: (dateTimeStamp: number) => {
        let result = "";
        const minute = 1000 * 60,
            hour = minute * 60,
            day = hour * 24,
            month = day * 30,
            year = month * 12,
            now = new Date().getTime(),
            diffValue = now - dateTimeStamp;
        if (diffValue < 0) { return; }
        const yearC = diffValue / year,
            monthC = diffValue / month,
            weekC = diffValue / (7 * day),
            dayC = diffValue / day,
            hourC = diffValue / hour,
            minC = diffValue / minute;

        // 常规格式化
        function formatDate(date: number) {
            const timer = new Date(date),
                year = timer.getFullYear();
            let month: string | number = timer.getMonth() + 1,
                day: string | number = timer.getDate();
            if (month >= 1 && month <= 9) { month = "0" + month; }
            if (day >= 0 && day <= 9) { day = "0" + day; }
            return year + '-' + month + '-' + day;
        }

        if (monthC >= 1) {
            result = formatDate(dateTimeStamp);
        } else if (weekC >= 1) {
            result = "" + parseInt(String(weekC), 10) + "周前";
        } else if (dayC >= 1) {
            result = "" + parseInt(String(dayC), 10) + "天前";
        } else if (hourC >= 1) {
            result = "" + parseInt(String(hourC), 10) + "小时前";
        } else if (minC >= 1) {
            result = "" + parseInt(String(minC), 10) + "分钟前";
        } else { result = "刚刚"; }
        return result;
    },
};

export default filters;

