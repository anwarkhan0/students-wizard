
// components/Application/forms/verification/EmailVerificationCard.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

function EmailVerificationCard() {
  const {
    userData,
    confirmationCodes,
    setConfirmationCodes,
    isVerifying,
    verifyEmail,
    resendEmailCode,
  } = useContext(ApplicationContext);

  const cardClassName = `border-2 ${
    userData.emailConfirmed ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"
  }`;

  return (
    <Card className={cardClassName}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <CheckCircle
            className={`h-4 w-4 ${userData.emailConfirmed ? "text-green-600" : "text-gray-400"}`}
          />
          Email Verification
        </CardTitle>
        <CardDescription className="text-xs">Code sent to: {userData.email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {!userData.emailConfirmed ? (
          <>
            <div>
              <Label htmlFor="emailCode" className="text-sm">
                Verification Code
              </Label>
              <Input
                id="emailCode"
                type="text"
                placeholder="Enter 6-digit code"
                maxLength={6}
                value={confirmationCodes.email}
                onChange={(e) =>
                  setConfirmationCodes({ ...confirmationCodes, email: e.target.value })
                }
              />
            </div>
            <div className="text-xs text-gray-600 bg-gray-100 p-2 rounded">
              Demo Code: {confirmationCodes.generatedEmailCode}
            </div>
            <Button
              size="sm"
              onClick={() => verifyEmail()}
              disabled={isVerifying.email || confirmationCodes.email.length !== 6}
              className="w-full"
            >
              {isVerifying.email ? "Verifying..." : "Verify Email"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => resendEmailCode()}
              className="w-full"
            >
              Resend Code
            </Button>
          </>
        ) : (
          <div className="text-center py-4">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-800 font-medium">Email Verified!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default EmailVerificationCard;