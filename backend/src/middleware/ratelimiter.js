import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // const success = (await ratelimit.limit("my-limit-key")).success;
    const { success } = await ratelimit.limit("my-limit-key"); 
    // here we have to use userid or ip address and based on that limit users individually, in this case all the users will be get rate limit after 100 req in 60 sec

    if (!success) {
      return res.status(429).json({ message: "Too many request" }); 
    }

    next();
  } catch (error) {
    console.error("Error in ratelimiter", error);
    next(error);
  }
};

export default rateLimiter;
