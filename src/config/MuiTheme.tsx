import React, {HTMLAttributes} from "react";
import {Renderers, ThemeProvider, ThemeProviderProps} from "@sparkui/react-theme";
import {Button, ButtonProps, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {isDefined} from "@sparkui/react-utils";
import {ValidationError} from "@sparkui/react-field";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from "dayjs";

export interface Colors extends Record<string, string> {
  error: string
}

export interface Spaces extends Record<string, string> {
  border: string;
}

export const getDefaultMessage = (errors: ValidationError[])=> {
  if (errors.includes(ValidationError.REQUIRED)) {
    return "Required value";
  }
  return undefined;
}

export const MuiTheme = ({children, renderers}: ThemeProviderProps<Colors, Spaces>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider
      renderers={{
        [Renderers.TEXT]: ({children, ...props}: HTMLAttributes<HTMLSpanElement>) => (
          <span {...props}>{children}</span>),
        [Renderers.TEXT_LABEL]: ({children, ...props}: HTMLAttributes<HTMLSpanElement>) => (
          <span className="text-muted" {...props}>{children}</span>),
        [Renderers.TEXT_TITLE]: ({children, ...props}: HTMLAttributes<HTMLSpanElement>) => (
          <span className="fs-3" {...props}>{children}</span>),
        [Renderers.TEXT_SUBTITLE]: ({children, ...props}: HTMLAttributes<HTMLSpanElement>) => (
          <span className="fs-4" {...props}>{children}</span>),

        [Renderers.BUTTON]: ({children, ...props}: ButtonProps) => (
          <Button {...props}>{children}</Button>),
        [Renderers.BUTTON_PRIMARY]: ({children, ...props}: ButtonProps) => (
          <Button variant="contained" color="primary" {...props}>{children}</Button>),
        [Renderers.BUTTON_SECONDARY]: ({children, ...props}: ButtonProps) => (
          <Button variant="outlined" color="primary" {...props}>{children}</Button>),
        [Renderers.BUTTON_WARNING]: ({children, ...props}: ButtonProps) => (
          <Button variant="outlined" color="warning" {...props}>{children}</Button>),
        [Renderers.BUTTON_ERROR]: ({children, ...props}: ButtonProps) => (
          <Button variant="contained" color="error" {...props}>{children}</Button>),
        [Renderers.BUTTON_SUCCESS]: ({children, ...props}: ButtonProps) => (
          <Button variant="outlined" color="success" {...props}>{children}</Button>),
        [Renderers.BUTTON_INFO]: ({children, ...props}: ButtonProps) => (
          <Button variant="text" color="info" {...props}>{children}</Button>),

        [Renderers.FIELD_TEXT]: ({ref, value, onBlur, onChange, props: {type}, params: {getHelperText, ...otherParams}, errors}) => (
          <TextField
            variant="standard"
            type={type}
            inputRef={ref}
            value={value}
            error={errors.length > 0}
            onChange={({target}) => onChange(target.value)}
            onBlur={({target}) => onBlur(target.value)}
            {...otherParams}
            helperText={isDefined(getHelperText) ? getHelperText(errors) : (otherParams.helperText ?? getDefaultMessage(errors))}
          />
        ),
        [Renderers.FIELD_DATE]: ({ref, value, onBlur, onChange, params: {getHelperText, ...otherParams}, errors}) => (
          <DatePicker
            variant="standard"
            inputRef={ref}
            value={dayjs(value)}
            error={errors.length > 0}
            onChange={(value: Dayjs) => onChange(value?.toDate())}
            onBlur={(value: Dayjs) => onBlur(value?.toDate())}
            {...otherParams}
            helperText={isDefined(getHelperText) ? getHelperText(errors) : (otherParams.helperText ?? getDefaultMessage(errors))}
            slotProps={{ textField: { variant: "standard" } }}
          />
        ),
        [Renderers.FIELD_TEXT_AREA]: ({ref, value, onBlur, onChange, params: {getHelperText, ...otherParams}, errors}) => (
          <TextField
            variant="standard"
            inputRef={ref}
            value={value}
            error={errors.length > 0}
            onChange={({target}) => onChange(target.value)}
            onBlur={({target}) => onBlur(target.value)}
            {...otherParams}
            helperText={isDefined(getHelperText) ? getHelperText(errors) : (otherParams.helperText ?? getDefaultMessage(errors))}
            multiline={true}
          />
        ),
        [Renderers.FIELD_CHECKBOX]: ({id, props, params, errors}) => (
          <>
            <div className="form-check">
              <input
                id={id}
                className="form-check-input"
                {...params.input}
                {...props}
              />
              <label className="form-check-label" htmlFor={id}>
                {params.label}
              </label>
              {errors.length > 0 && (
                <div className="invalid-feedback d-block">
                  {params.error ? params.error(errors) : `Validation failed ${errors}`}
                </div>
              )}
            </div>
          </>
        ),
        [Renderers.FIELD_RADIO]: ({props, params: {name, options, error}, errors}) => (
          <>
            {
              options.map((item: {key: string, label: string, input: object}) => (
                <div className="form-check" key={item.key}>
                  <input
                    className="form-check-input"
                    {...props}
                    {...item.input}
                    id={item.key}
                    name={name}
                  />
                  <label className="form-check-label" htmlFor={item.key}>
                    {item.label}
                  </label>
                </div>
              ))
            }
            {errors.length > 0 && (
              <div className="invalid-feedback d-block">
                {error ? error(errors) : `Validation failed ${errors}`}
              </div>
            )}
          </>
        ),
        [Renderers.FIELD_SELECT]: ({id, ref, value, onBlur, onChange, params: {label, options}, errors}) => (
          <>
            <FormControl fullWidth>
              <InputLabel id={id}>Age</InputLabel>
              <Select
                variant="standard"
                error={errors.length > 0}
                inputRef={ref}
                labelId={id}
                id={id}
                value={value}
                label={label}
                onChange={({target}) => onChange(target.value)}
                onBlur={({target}) => onBlur(target.value)}
              >
                {
                  options?.map(({value, label}: {value: string | number | readonly string[] | undefined, label: string}) => (
                    <MenuItem key={`${value}`} value={value}>{label}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </>
        ),
        ...
          (renderers ?? {}),
      }}
    >
      {
        children
      }
    </ThemeProvider>
  </LocalizationProvider>
)