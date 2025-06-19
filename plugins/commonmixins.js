export default {
    data() {
        return {      
            app_image_url:"http://127.0.0.1:8000/storage",             
        };
    },
  methods: {
    required(v) {
      return !!v || "Field is required";
    },
    email(v) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(v)) {
        return "Invalid e-mail.";
      }
    },
    password(v) {
      if (!/\d/.test(v)) {
        return "A password must contain at least one number";
      }
      if (!/[a-z]/.test(v)) {
        return "A password must contain at least lower case letter";
      }
      if (!/[A-Z]/.test(v)) {
        return "A password must contain at least upper case letter";
      }
      if (!/[!#=@$%&*)(_-]/.test(v)) {
        return "A password must contain at least one special character";
      }
      if (v.length < 8) {
        return "A password must be at least 8 characters long";
      }
    },
    confirm_password(v) {
      if (v !== this.form.password) {
        return "password does not match";
      }
    },
    getErrorMessages(response, key) {
      // eslint-disable-next-line no-undef
      return _.get(response, key);
    },
    getPrice(price) {
      return `USD. ${parseFloat(price).toFixed(2)} `;
    },
    removeLeadingZeorsFromReferences(reference) {
      // eslint-disable-next-line no-undef
      const split_ref = _.split(reference, "-");
      if (split_ref.length === 1) return reference;
      return `${split_ref[0]}-${parseInt(split_ref[1])}`;
    },
    firstLetterUpperCase(value) {
      if (value === null) return "N/A";
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(value));
    },
    makeUpperCase(value) {
      // eslint-disable-next-line no-undef
      return _.startCase(_.toUpper(value));
    },
    //For time format
    momentFormat(value, arg) {
      return moment(new Date(value), arg).tz("Australia/Sydney").format(arg);
    },
    momentTimestampFormat(value, arg) {
      return moment(new Date(value)).format(arg);
    },
    convertDateToTimezone(date, timezone) {
      const str = moment(date).format("DD MMMM YYYY hh:mm:ss A");
      const tzMoment = moment.tz(str, timezone.identifier);
      return tzMoment.toDate();
    },
    momentConvertToUTCAndReturn(value, arg) {
      return moment(new Date(moment.utc(value).format())).format(arg);
    },
    getFullName(tr) {
      if (!tr.first_name) return "N/A";
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(`${tr.first_name} ${tr.last_name}`));
    },
    //For time format ends
  },
};
