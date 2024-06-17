using Api_for_Mta_finel_project.Data;
using Api_for_Mta_finel_project.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Text.Json.Nodes;

namespace Api_for_Mta_finel_project.Repository
{
    public class UserRepository
    {
         private readonly AppDbContext _dbContext ;

        public UserRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        private  bool IsUserNameExists(string userName)
        {
            // Check if any user with the given username exists in the database
            if(_dbContext.Users ==null)
                return false;
            
            return _dbContext.Users.Any(u => u.userName == userName);
        }


        private bool IsEmailExists(string email)
        {
            // Check if any user with the given email exists in the database
            return _dbContext.Users.Any(u => u.email == email);
        }


        public  void addUser(  User newUser)//throws exception
        {
            
                
                if ( IsUserNameExists(newUser.userName))
                    throw new Exception("user already exist");
                _dbContext.Users.Add(newUser);
                _dbContext.SaveChanges();
         

        }

        public  User returnUserByUserName(string p_userName)
        {


            User? user = _dbContext.Users.FirstOrDefault(u => u.userName == p_userName);
            if (user == null)
            {
                throw new Exception("there is no user called" + p_userName);
            }
            return user;

        }
    }
}
