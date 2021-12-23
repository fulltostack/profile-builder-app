import { Typography } from "antd";

export const FormError = ({ errors, touched }) => {
  return (
    <div>
      {errors?.firstName && touched?.firstName && (
        <Typography>{errors.firstName}</Typography>
      )}
      {errors?.lastName && touched?.lastName && (
        <Typography>{errors.lastName}</Typography>
      )}
      {errors?.description && touched?.description && (
        <Typography>{errors.description}</Typography>
      )}
      {errors?.email && touched?.email && (
        <Typography>{errors.email}</Typography>
      )}
      {errors?.tagLine && touched?.tagLine && (
        <Typography>{errors.tagLine}</Typography>
      )}
      {errors?.company && touched?.company && (
        <Typography>{errors.company}</Typography>
      )}
      {errors?.role && touched?.role && <Typography>{errors.role}</Typography>}
      {errors?.startDate && touched?.startDate && (
        <Typography>{errors.startDate}</Typography>
      )}
      {errors?.endDate && touched?.endDate && (
        <Typography>{errors.endDate}</Typography>
      )}
      {errors?.skills && touched?.skills && (
        <Typography>{errors.skills}</Typography>
      )}
    </div>
  );
};
