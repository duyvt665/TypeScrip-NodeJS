import { useTheme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { jwtDecode } from "jwt-decode";
import { Alert } from "antd";

const Login = () => {
  type FormData = {
    mail: string;
    Password: string;
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleRegister = () => {
    navigate("/register");
  };

  const loginUserMutation = useMutation(
    (data: FormData) => {
      return fetch("http://localhost:3000/authen/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      });
    },
    {
      onError: (error) => {
        console.error("Error during login:", error);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      },
    }
  );

  const getisAdminFromJWT = (accesstoken: any) => {
    const decodedToken = jwtDecode(accesstoken);
    if ("isAdmin" in decodedToken) {
      return decodedToken.isAdmin;
    }
    return null;
  };

  const onSubmit = handleSubmit((data) => {
    loginUserMutation.mutate(data);
  });

  useEffect(() => {
    if (loginUserMutation.isSuccess) {
      const accessToken = loginUserMutation.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      const checkisAdmin: any = getisAdminFromJWT(accessToken);
      console.log("check", checkisAdmin);
      if (checkisAdmin) {
        navigate("/allusers");
      }
      if (!checkisAdmin) {
        navigate("/home");
      }
      // const expiresIn: any = getExpiresInFromJWT(accessToken);
      // const i =  setInterval(() => {
      //   const currentTime = Math.floor(Date.now() / 1000);
      //   console.log("current", currentTime);
      //   if (expiresIn <= currentTime) {
      //     localStorage.removeItem("accessToken");
      //     navigate("/");

      //     return;
      //   }
      // }, 1000);
    }
  }, [loginUserMutation.isSuccess, loginUserMutation.isError]);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          filter: "blur(18px)",
          zIndex: -1,
          bottom: 0,
        }}
      >
        <svg
          width="100%"
          height="calc(100vh - 175px)"
          viewBox="0 0 405 809"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z"
            fill={theme.palette.primary.light}
          />
          <path
            d="M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z"
            fill={theme.palette.success.light}
            opacity="0.6"
          />
          <path
            d="M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z"
            fill={theme.palette.error.lighter}
            opacity="1"
          />
        </svg>
      </Box>
      <a href="">
        <svg
          className="ml-6 mt-6"
          width="118"
          height="35"
          viewBox="0 0 118 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
            fill="#0958d9"
          ></path>
          <path
            d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
            fill="url(#paint0_linear)"
          ></path>
          <path
            d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
            fill="url(#paint1_linear)"
          ></path>
          <path
            d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
            fill="#1677ff"
          ></path>
          <path
            d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
            fill="#000"
            fill-opacity="0.85"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="8.62526"
              y1="14.0888"
              x2="5.56709"
              y2="17.1469"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#002c8c"></stop>
              <stop
                offset="0.9637"
                stop-color="#0958d9"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="26.2675"
              y1="14.1279"
              x2="28.7404"
              y2="16.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#002c8c"></stop>
              <stop offset="1" stop-color="#0958d9" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </a>
      <form onSubmit={onSubmit}>
        <div className="flex border-2 flex-col w-[480px] m-auto mt-[65px] p-10 bg-white rounded-lg drop-shadow-xl brightness-100">
          <div className="flex">
            <p className="font-semibold text-2xl">Login</p>
            <button
              onClick={handleRegister}
              className="text-sm pt-[10px] pl-[190px] text-blue-500"
            >
              Don't have an account?
            </button>
          </div>
          <Label className="pt-8 !font-normal">Email Address</Label>
          <Input
            className="mt-2"
            type="email"
            placeholder="Enter email address"
            {...register("mail", {
              required: "Email Address is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email Address invalid",
              },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && (
            <p role="alert" className="text-red-500 text-xs mt-2">
              {errors.mail.message}
            </p>
          )}

          <Label className="pt-8 !font-normal">Password</Label>
          <div className="flex relative">
            <Input
              className="mt-2"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            <Button
              className="!mt-[-1px] !mr-[-15px] h-[35px] !w-[-50px]"
              variant="text"
              onClick={() => setShowPassword(!showPassword)}
              sx={{
                position: "absolute",
                right: "16px",
                top: "calc(50% - 12px)",
              }}
            >
              {showPassword ? (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="eye-invisible"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                  <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                </svg>
              )}
            </Button>
          </div>
          {errors.Password && (
            <p role="alert" className="text-red-500 text-xs mt-2">
              {errors.Password.message}
            </p>
          )}

          <div className="flex items-center mt-5">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="Keep me sign in" className="text-sm pb-0.5">
              Keep me sign in
            </label>
            <a href="" className="text-sm pl-[160px] hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button
            type="submit"
            className="!mt-8 !bg-[#1677FF] !capitalize"
            variant="contained"
          >
            Login
          </Button>
          <div className="flex items-center my-2 mt-7">
            <hr className="flex-grow border-t border-[#f0f0f0]" />
            <span className="px-3 text-xs">Login with</span>
            <hr className="flex-grow border-t border-[#f0f0f0]" />
          </div>
          <div className="flex mt-6 justify-evenly gap-6">
            <Button
              variant="outlined"
              className="!border-10 !border-gray-400 !text-gray-400 !text-sm w-[140px] !capitalize gap-2"
            >
              <img
                src="https://mantisdashboard.io/free/static/media/google.b7da2ce748745374ee27eb11dd475b9c.svg"
                alt="Google"
              />
              <span className="mt-[2px]">Google</span>
            </Button>
            <Button
              variant="outlined"
              className="!border-10 !border-gray-400 !text-gray-400 !text-sm w-[140px] !capitalize gap-2"
            >
              <img
                src="https://mantisdashboard.io/free/static/media/twitter.5b9c9738bc8e86846c91f27886cebacf.svg"
                alt="Twitter"
              />
              Twitter
            </Button>
            <Button
              variant="outlined"
              className="!border-10 !border-gray-400 !text-gray-400 !text-sm w-[140px] !capitalize gap-2"
            >
              <img
                src="https://mantisdashboard.io/free/static/media/facebook.5b823a6232805871728da1033d817609.svg"
                alt="Facebook"
              />
              Facebook
            </Button>
          </div>
        </div>
      </form>
      {showAlert && (
        <Alert
          className="!w-[215px] !mt-[-590px] !ml-[656px]"
          message="Incorect Email or Password"
          type="error"
          showIcon
        />
      )}
    </>
  );
};

export default Login;
