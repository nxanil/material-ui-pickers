import React, { PureComponent } from 'react';
import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, 'd MMM yyyy', { locale: this.locale });
  }
}

export default class DateFnsLocalizationExample extends PureComponent {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={LocalizedUtils} locale={frLocale}>
        <div className="picker">
          <DatePicker
            clearable
            helperText="Localization done right"
            format="d MMM yyyy"
            value={selectedDate}
            onChange={this.handleDateChange}
            clearLabel="vider"
            cancelLabel="annuler"
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}