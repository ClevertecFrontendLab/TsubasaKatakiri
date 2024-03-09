import React from 'react';
import classes from './calendar-page.module.scss';
import LayoutBlock from '@components/layout/layout';
import { Calendar } from 'antd';
import { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import type { Moment } from 'moment';
import ru from 'antd/es/date-picker/locale/ru_RU';

const CalendarPage: React.FC = () => {
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('DD-MM-YYYY'), mode);
    }

    return (
        <LayoutBlock>
            <Calendar
                onPanelChange={onPanelChange}
                locale={ru}
            />
        </LayoutBlock>
    );
};

export default CalendarPage;