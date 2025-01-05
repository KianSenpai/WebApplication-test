using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class StepperControl : UserControl
    {
        // Property to get and set the current step number
        public int CurrentStep { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            // You can optionally set a default step number if not provided
            if (CurrentStep == 0)
            {
                CurrentStep = 1; // Default to step 1
            }
        }
    }
}