
// components/Application/forms/verification/PhoneVerificationCard.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

function PhoneVerificationCard() {
  const {
    userData,
    confirmationCodes,
    setConfirmationCodes,
    isVerifying,
    verifyPhone,
    resendPhoneCode,
  } = useContext(ApplicationContext);

  const cardClassName = `border-2 ${
    userData.phoneConfirmed ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"
  }`;

  return (
    <Card className={cardClassName}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <CheckCircle
            className={`h-4 w-4 ${userData.phoneConfirmed ? "text-green-600" : "text-gray-400"}`}
          />
          Phone Verification
        </CardTitle>
        <CardDescription className="text-xs">Code sent to: {userData.phone}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {!userData.phoneConfirmed ? (
          <>
            <div>
              <Label htmlFor="phoneCode" className="text-sm">
                Verification Code
              </Label>
              <Input
                id="phoneCode"
                type="text"
                placeholder="Enter 6-digit code"
                maxLength={6}
                value={confirmationCodes.phone}
                onChange={(e) =>
                  setConfirmationCodes({ ...confirmationCodes, phone: e.target.value })
                }
              />
            </div>
            <div className="text-xs text-gray-600 bg-gray-100 p-2 rounded">
              Demo Code: {confirmationCodes.generatedPhoneCode}
            </div>
            <Button
              size="sm"
              onClick={() => verifyPhone()}
              disabled={isVerifying.phone || confirmationCodes.phone.length !== 6}
              className="w-full"
            >
              {isVerifying.phone ? "Verifying..." : "Verify Phone"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => resendPhoneCode()}
              className="w-full"
            >
              Resend Code
            </Button>
          </>
        ) : (
          <div className="text-center py-4">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-800 font-medium">Phone Verified!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default PhoneVerificationCard;